import os, requests, dotenv, random
# from flask_oauthlib.client import OAuth
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask import Flask, jsonify, session, redirect, url_for, request
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from models import db, Seat, User
import midtransclient

dotenv.load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("SQLALCHEMY_DATABASE_URL")
# app.config['GOOGLE_ID'] = os.getenv("GOOGLE_CLIENT_ID")
# app.config['GOOGLE_SECRET'] = os.getenv("GOOGLE_CLIENT_SECRET")
# app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# jwt = JWTManager(app)
db.init_app(app)
with app.app_context():
    db.create_all()

# Marshmallow
ma = Marshmallow(app)

class SeatSchema(ma.Schema):
    class Meta:
        fields = ('id', 'isAvailable', 'isVIP', 'isVVIP', 'owner_id')
seatSchema = SeatSchema(many=True)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'owned_seat')
userSchema = UserSchema(many=True)

# Google OAuth
# oauth = OAuth(app)

# google = oauth.remote_app(
#     'google',
#     consumer_key=app.config['GOOGLE_ID'],
#     consumer_secret=app.config['GOOGLE_SECRET'],
#     request_token_params={
#         'scope': 'email',
#     },
#     base_url='https://www.googleapis.com/oauth2/v1/',
#     request_token_url=None,
#     access_token_method='POST',
#     access_token_url='https://accounts.google.com/o/oauth2/token',
#     authorize_url='https://accounts.google.com/o/oauth2/auth',
# )

snap = midtransclient.Snap(
    is_production=False,
    server_key=os.getenv('SANDBOX_MIDTRANS_SERVER_KEY')
)

parameter_price = 100
parameter_freq = 1

parameter = {
    "transaction_details": {
        "order_id": (random.randint(1, 100)*10)+random.randint(1, 100),
        "gross_amount": parameter_price*parameter_freq
    },
    "credit_card": {
        "secure": True,
    },
    "item_details": {
        "name": "test",
        "price": parameter_price,
        "quantity": parameter_freq
    },
    "customer_details": {
        "first_name": "",
        "last_name": "",
        "email": "aaronhartono28@gmail.com",
    },
}

parameter["transaction_details"]["gross_amount"] = parameter["item_details"]["price"]*parameter["item_details"]["quantity"]
transaction = snap.create_transaction(parameter)
transaction_token = transaction['token']

@app.route('/api/seat/<seat_id>', methods=['GET'])
def get_seat_status(seat_id):
    seat = Seat.query.get(seat_id)
    if seat:
        return jsonify({'id': seat.id, 'isAvailable': seat.isAvailable, 'isVIP': seat.isVIP, 'isVVIP': seat.isVVIP, 'owner_id': seat.owner_id})
    else:
        return jsonify({'error': 'Seat not found'}), 404

@app.route('/api/seats', methods=['GET'])
def get_all_seats():
    seats = Seat.query.all()
    result = seatSchema.dump(seats)
    return jsonify(result)

@app.route('/api/users', methods=['GET', 'POST'])
def get_all_users():
    if request.method == 'GET':
        users = User.query.all()
        result = userSchema.dump(users)
        return jsonify(result)
    elif request.method == 'POST':
       data = request.get_json()
       id = data.get('id')
       owned_seat = data.get('owned_seat')
       new_user = User(id=id, owned_seat=owned_seat)
       try:
           db.session.add(new_user)
           db.session.commit()
           return jsonify({'message': 'User added successfully'})
       except Exception as e:
           db.session.rollback()
           return jsonify({'error': str(e)}), 500

@app.route('/api/users/<user_email>', methods=['GET', 'POST', 'PUT'])
def handle_user(user_email):
    if request.method == 'GET':
        user = User.query.filter_by(id=user_email).first()
        if user:
            result = userSchema.dump(user)
            return jsonify(result)
        else:
            return jsonify()
    elif request.method == 'POST':
        data = request.get_json()
        id = data.get('id')
        owned_seat = data.get('owned_seat')
        new_user = User(id=id, owned_seat=owned_seat)
        try:
            db.session.add(new_user)
            db.session.commit()
            return jsonify({'message': 'User added successfully'})
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 500
    elif request.method == 'PUT':
        data = request.get_json()
        owned_seat = data.get('owned_seat')
        user = User.query.filter_by(id=user_email).first()
        if user:
            user.owned_seat = owned_seat
            try:
                db.session.commit()
                return jsonify({'message': 'User seats updated successfully'})
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
        else:
            return jsonify({'error': 'User not found'}), 404
       
@app.route('/api/tokenizer/<user_email>', methods=['GET', 'POST'])
def post_token(user_email):
    if request.method == 'POST':
        data = request.get_json()
        parameter_price = data["price"]
        parameter_freq = 1

        parameter = {
            "transaction_details": {
                "order_id": (random.randint(1, 100) * 10) + random.randint(1, 100),
                "gross_amount": parameter_price * parameter_freq
            },
            "credit_card": {
                "secure": True,
            },
            "item_details": [{
                "name": data["id"],
                "price": parameter_price,
                "quantity": parameter_freq
            }],
            "customer_details": {
                "first_name": data["first_name"],
                "last_name": data["last_name"],
                "email": data["email"],
            },
        }

        parameter["transaction_details"]["gross_amount"] = parameter["item_details"][0]["price"] * \
                                                           parameter["item_details"][0]["quantity"]
        transaction = snap.create_transaction(parameter)
        transaction_token = transaction['token']
        transaction_url = transaction['redirect_url']
        return jsonify({"token": transaction_token, "redirect_url": transaction_url})
    elif request.method == 'GET':
        return jsonify({"token": transaction_token, "redirect_url": transaction_url})

@app.after_request
def after_request(response):
    if response.status_code >= 400:
        app.logger.error(f"Error in request: {response.status_code} - {response.data}")
    return response

if __name__ == "__main__":
    app.run(debug=True)
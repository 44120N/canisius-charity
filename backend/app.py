import os, requests, dotenv
# from flask_oauthlib.client import OAuth
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask import Flask, jsonify, session, redirect, url_for, request
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from models import db, Seat, User

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
        fields = ('id', 'isAvailable', 'isVIP', 'owner_id')
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

@app.route('/api/seat/<seat_id>', methods=['GET', 'POST'])
def get_seat_status(seat_id):
    if request.method == 'GET':
        seat = Seat.query.get(seat_id)
        if seat:
            return jsonify({'id': seat.id, 'isAvailable': seat.isAvailable, 'isVIP': seat.isVIP, 'owner_id': seat.owner_id})
        else:
            return jsonify({'error': 'Seat not found'}), 404
    elif request.method == 'POST':
        seat = Seat.query.get(seat_id)
        if seat:
            try:
                data = request.get_json()
                seat.isOrder = data.get('isOrder', seat.isOrder)
                db.session.commit()
                return jsonify({'message': f'Seat {seat_id} order status updated successfully'}), 200
            except Exception as e:
                db.session.rollback()
                print(f'Error updating seat {seat_id} order status: {e}')
                return jsonify({'error': str(e)}), 500
        else:
            return jsonify({'error': 'Seat not found'}), 404
    else:
        return jsonify({'error': 'Method does not support'}), 404

@app.route('/api/seats', methods=['GET'])
def get_all_seats():
    seats = Seat.query.all()
    result = seatSchema.dump(seats)
    return jsonify(result)

@app.after_request
def after_request(response):
    if response.status_code >= 400:
        app.logger.error(f"Error in request: {response.status_code} - {response.data}")
    return response

if __name__ == "__main__":
    app.run(debug=True)
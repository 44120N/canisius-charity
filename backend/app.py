import os, requests, dotenv, random, datetime
from flask import Flask, flash, jsonify, render_template, session, redirect, url_for, request
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from models import db, Seat
import midtransclient
from sqlalchemy.exc import OperationalError

from flask_admin import Admin, BaseView, AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask_admin.base import AdminIndexView, expose
from flask_admin.contrib.sqla.filters import FilterEqual
from flask_admin.form import DateTimePickerWidget
from flask_admin.contrib.sqla import ModelView
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField
from wtforms.validators import InputRequired
from werkzeug.security import generate_password_hash, check_password_hash

dotenv.load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("SQLALCHEMY_DATABASE_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

db.init_app(app)
with app.app_context():
    db.create_all()

# Marshmallow
ma = Marshmallow(app)

class SeatSchema(ma.Schema):
    class Meta:
        fields = ('id', 'isAvailable', 'isVIP', 'isVVIP', 'owner_id', 'isOrder')
seatSchema = SeatSchema(many=True)

# class UserSchema(ma.Schema):
#     class Meta:
#         fields = ('id', 'owned_seat')
# userSchema = UserSchema(many=True)

snap = midtransclient.Snap(
    is_production=False,
    server_key=os.getenv('SANDBOX_MIDTRANS_SERVER_KEY'),
    client_key=os.getenv('SANDBOX_MIDTRANS_CLIENT_KEY')
)

parameter_price = 100
parameter_freq = 1

parameter = {
    "transaction_details": {
        "order_id": "#ID " + str(timestamp),
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
        return jsonify({'id': seat.id, 'isAvailable': seat.isAvailable, 'isVIP': seat.isVIP, 'isVVIP': seat.isVVIP, 'owner_id': seat.owner_id, 'isOrder': seat.isOrder})
    else:
        return jsonify({'error': 'Seat not found'}), 404

@app.route('/api/seat/<seat_id>/post', methods=['POST'])
def post_seat_status(seat_id):
    seat = Seat.query.get(seat_id)
    if seat:
        data = request.get_json()
        try:
            seat.isAvailable = False
            seat.owner_id = data['owner_id']
            db.session.commit()
            return jsonify({'message': f'Seat {seat_id} updated successfully'}), 200
        except OperationalError:
            raise
    else:
        return jsonify({'error': 'Seat not found'}), 404

@app.route('/api/seat/<seat_id>/is_order', methods=['POST'])
def post_seat_isOrder(seat_id):
    seat = Seat.query.get(seat_id)
    data = request.get_json
    if seat:
        data = request.get_json()
        try:
            seat.isOrder = data['orderStatus']
            db.session.commit()
            return jsonify({'message': f'Seat {seat_id} updated successfully'}), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': f'{e}'}), 400
    else:
        return jsonify({'error': 'Seat not found'}), 404

@app.route('/api/seat/<seat_id>/pending', methods=['POST'])
def pending_seat_status(seat_id):
    seat = Seat.query.get(seat_id)
    if seat:
        data = request.get_json()
        try:
            seat.isOrder = data['orderStatus']
            db.session.commit()
            return jsonify({'message': f'Seat {seat_id} updated successfully'}), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': f'{e}'}), 400
    else:
        return jsonify({'error': 'Seat not found'}), 404

@app.route('/api/seats', methods=['GET'])
def get_all_seats():
    seats = Seat.query.all()
    result = seatSchema.dump(seats)
    return jsonify(result)
    
@app.route('/api/transaction/<user_email>', methods=['POST'])
def post_transaction(user_email):
    data = request.get_json()
    if data:
        for i in data['last_transaction']:
            seat = Seat.query.get(i)
            if seat.isAvailable:
                seat.isAvailable = False
            if seat.owner_id == None:
                seat.owner_id = user_email
        db.session.commit()
        return jsonify({'message': 'Transaction safed successfully'}), 200
    else:
        return jsonify({'error': 'Transaction not found'}), 404

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

login_manager = LoginManager()
login_manager.init_app(app)


class AdminUser(UserMixin):
    def __init__(self, username):
        self.username = username

    def get_id(self):
        return self.username
    
    @property
    def is_authenticated(self):
        return True
    
    @property
    def is_admin(self):
        return True
    
    @property
    def is_active(self):
        return True
    
    @property
    def is_anonymous(self):
        return False

    def __repr__(self):
        return f"<AdminUser {self.username}>"

@login_manager.user_loader
def load_user(user_id):
    return AdminUser(user_id)

ADMIN_USERNAME = os.getenv('ADMIN_USERNAME_MAIN')
ADMIN_PASSWORD_HASH = generate_password_hash(os.getenv('ADMIN_PASSWORD_MAIN'))

@app.route('/admin')
@login_required
def admin_panel():
    seats = Seat.query.all()
    print(seats)
    return render_template('admin/index.html', seats=seats)

@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == ADMIN_USERNAME and check_password_hash(ADMIN_PASSWORD_HASH, password):
            user = AdminUser(username)
            login_user(user)
            return redirect(url_for('admin.index'))
        else:
            flash('Invalid username or password', 'error')
    return render_template('admin/login.html')

@app.route('/admin/logout')
@login_required
def admin_logout():
    logout_user()
    return redirect(url_for('login'))

class AdminHomeView(AdminIndexView):
    @expose('/')
    def index(self):
        if not current_user.is_authenticated or not current_user.is_admin:
            return redirect(url_for('login'))
        return super(AdminHomeView, self).index()

class SeatModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.is_admin
    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('login'))
    
    column_list = ['id', 'isAvailable', 'isVIP', 'isVVIP', 'owner_id', 'isOrder']
    column_searchable_list = ['id', 'owner_id']
    column_sortable_list = ['id']
    column_filters = ['isAvailable', 'isVIP', 'isVVIP', 'owner_id', 'isOrder']
    form_widget_args = {
        'created_at': {
            'widget': DateTimePickerWidget()
        }
    }
    @expose('/edit/<id>', methods=['GET', 'POST'])
    def edit_view(self, id):
        seat = Seat.query.get_or_404(id)

        if seat is None:
            flash('Seat not found', 'error')
            return redirect(url_for('admin_panel'))

        form = SeatEditForm(obj=seat)

        if request.method == 'POST' and form.validate_on_submit():
            form.populate_obj(seat)
            db.session.commit()
            flash('Seat updated successfully', 'success')
            return redirect(url_for('admin_panel'))

        return self.render('admin/seat_edit.html', form=form, seats=seat)

class SeatEditForm(FlaskForm):
    isAvailable = BooleanField('Available')
    isVIP = BooleanField('VIP')
    isVVIP = BooleanField('VVIP')
    owner_id = StringField('Owner ID')
    isOrder = BooleanField('Order')

admin = Admin(app, name='Admin Console', template_mode='bootstrap3', index_view=AdminHomeView())
admin.add_view(SeatModelView(Seat, db.session))

if __name__ == "__main__":
    app.run(debug=True)
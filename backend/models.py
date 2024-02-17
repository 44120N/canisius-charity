import time
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
time_expired = 60

class User(db.Model, UserMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    owned_seat = db.Column(db.String(30), nullable=False)
    amount = db.Column(db.String(20), nullable=False)

    def __init__(self, id, username, email, owned_seat, amount):
        self.id = id
        self.username = username
        self.email = email
        self.owned_seat = owned_seat
        self.amount = amount

class Seat(db.Model, UserMixin):
    __tablename__ = "seats"
    id = db.Column(db.String(3), primary_key=True, nullable=False, unique=True)
    isAvailable = db.Column(db.Boolean, nullable=False)
    isVIP = db.Column(db.Boolean, nullable=False)
    isVVIP = db.Column(db.Boolean, nullable=False)
    owner_id = db.Column(db.String(50))
    isOrder = db.Column(db.Boolean, nullable=False)

    def __init__(self, id, isAvailable, isVIP, isVVIP, owner_id, isOrder):
        self.id = id
        self.isAvailable = isAvailable
        self.isVIP = isVIP
        self.isVVIP = isVVIP
        self.owner_id = owner_id
        self.isOrder = isOrder
        
    def order_time_expired(self):
        return (time.time() - self.order_timestamp) >= time_expired
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class User(db.Model):
#     __tablename__ = "users"
#     id = db.Column(db.String(50), primary_key=True)
#     owned_seat = db.relationship('Seat', backref='owner', lazy=True)

#     def __init__(self, id):
#         self.id = id

class Seat(db.Model, UserMixin):
    __tablename__ = "seats"
    id = db.Column(db.String(3), primary_key=True)
    isAvailable = db.Column(db.Boolean, nullable=False)
    isVIP = db.Column(db.Boolean, nullable=False)
    isVVIP = db.Column(db.Boolean, nullable=False)
    # owner_id = db.Column(db.String(50), db.ForeignKey('users.id'))
    owner_id = db.Column(db.String(50))
    isOrder = db.Column(db.Boolean, nullable=False)

    def __init__(self, id, isAvailable, isVIP, isVVIP, owner_id, isOrder):
        self.id = id
        self.isAvailable = isAvailable
        self.isVIP = isVIP
        self.isVVIP = isVVIP
        self.owner_id = owner_id
        self.isOrder = isOrder
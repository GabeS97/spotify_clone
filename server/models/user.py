from .db import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(255), nullable=False, unique=True)
    dob = db.Column(db.DateTime())
    gender = db.Column(db.Boolean())

    def to_dict(self):
        return {
            'email':self.email ,
            'password':self.password ,
            'username':self.username ,
            'dob':self.dob ,
            'gender':self.gender,
        }

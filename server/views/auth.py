from flask import Blueprint
from server.models import db, User

auth = Blueprint('auth', __name__)

@auth.route('/')
def get_user():
    users = User.query.all()
    return { 'users': [user.to_dict() for user in users]}

    
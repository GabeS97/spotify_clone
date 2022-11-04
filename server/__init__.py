# __init__.py will contain the application factory and tell python that 'server' directory should be treated as a package
from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from os import path
from .models import db
from .views.auth import auth
from .views.views import views
from .seeds import seed_commands

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


    app.cli.add_command(seed_commands)
    db.init_app(app)
    migrate = Migrate(app, db)

    app.register_blueprint(views, url_prefix='/api/views')
    app.register_blueprint(auth, url_prefix='/api/auth')
    return app

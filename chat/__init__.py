"""Chat package initializer."""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_heroku import Heroku

# define flask app
app = Flask(__name__)

# configuration
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/users'
heroku = Heroku(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# table
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(), unique=True)
    password = db.Column(db.String(), unique=True)

    def __init__(self, username, password):
        """Enter a new user."""
        self.username = username
        self.password = password

    def __repr__(self):
        """Representation."""
        return '<id %r>' % self.id

# circular imports!
import chat.api
import chat.views

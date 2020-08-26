"""Chat package initializer."""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from flask_heroku import Heroku

# define flask app
app = Flask(__name__)

# configuration
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/users'
heroku = Heroku(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = b'S\xf4\xc2uZ\xa3\xaf\xef\x8c*BbU\xdc\x05\xa7h\x8c\x86\x9d\x89]\xc5 '

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# database model
class User(db.Model):
    __tablename__ = 'users_table'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(), unique=True)
    password = db.Column(db.String())

    def __init__(self, username, password):
        """Enter a new user."""
        self.username = username
        self.password = password

    def __repr__(self):
        """Representation."""
        return '<id %r>' % self.id

class Message(db.Model):
    __tablename__ = 'messages_table'
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.String())
    recipient = db.Column(db.String())
    content = db.Column(db.String())
    time_created = db.Column(db.DateTime(timezone=True), server_default=db.text('NOW()'))

    def __init__(self, owner, recipient, content):
        """Enter a new message."""
        self.owner = owner
        self.recipient = recipient
        self.content = content

    def __repr__(self):
        """Representation."""
        return '<id %r>' % self.id

# circular imports!
import chat.api
import chat.views

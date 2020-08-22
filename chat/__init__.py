"""Chat package initializer."""
import flask

# define flask app
app = flask.Flask(__name__)

# config (maybe we'll do this later when we need it)
# circular imports!
import chat.api
import chat.views

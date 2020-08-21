"""Serve up server-side dynamic pages."""
import flask
import chat

@chat.app.route('/')
def show_index():
    """Render main page."""
    context = {}
    return flask.render_template("index.html", **context)

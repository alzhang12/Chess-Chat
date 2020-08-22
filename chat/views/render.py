"""Serve up server-side dynamic pages."""
import flask
import chat

@chat.app.route('/', methods=['GET', 'POST'])
def show_index():
    """Render main page."""
    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
    
        new_user = chat.User(username, password)
        chat.db.session.add(new_user)
        chat.db.session.commit()
    
    context = {}
    return flask.render_template("index.html", **context)

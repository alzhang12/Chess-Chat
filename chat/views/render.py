"""Serve up server-side dynamic pages."""
import flask
import pathlib
import chat

@chat.app.route('/', methods=['GET', 'POST'])
def show_index():
    """Render main page."""
    if 'logged_in_user' not in flask.session:
        if flask.request.method == 'POST':
            username = flask.request.form['username']
            password = flask.request.form['password']
        
            new_user = chat.User(username, password)
            chat.db.session.add(new_user)
            chat.db.session.commit()
        
        context = {}
        return flask.render_template("index.html", **context)
    else:
        # display home page for user (idk what this looks like yet)
        pass

@chat.app.route('/signup/', methods=['GET', 'POST'])
def sign_up():
    """Sign up page."""
    if 'logged_in_user' in flask.session:
        flask.redirect(flask.url_for('show_index'))

    # display sign up form

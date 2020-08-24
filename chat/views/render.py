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
        return "<h1>login successful!</h1>"


@chat.app.route('/register/', methods=['GET', 'POST'])
def sign_up():
    """Sign up page."""
    if 'logged_in_user' in flask.session:
        return flask.redirect(flask.url_for('show_index'))

    # display sign up form
    if flask.request.method == 'POST':
        # check for duplicate usernames
        all_users = chat.User.query.all()
        user_usernames = [ user.username for user in all_users ]
        
        if flask.request.form['username'] in user_usernames:
            flask.abort(409)
    
        # check for password correctness
        if flask.request.form['password'] != flask.request.form['password-2']:
            flask.abort(409)
        
        # insert into db
        new_user = chat.User(flask.request.form['username'], flask.request.form['password'])
        chat.db.session.add(new_user)
        chat.db.session.commit()
        return flask.redirect(flask.url_for('show_index'))

    context = {
        "status": "no errors"
    }
    return flask.render_template("register.html", **context)


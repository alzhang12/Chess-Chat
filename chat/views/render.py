"""Serve up server-side dynamic pages."""
import flask
import pathlib
import chat

""" ------------------------------------------------------------------------ """
""" ------------------------ Main (Login) Page ----------------------------- """
""" ------------------------------------------------------------------------ """
@chat.app.route('/', methods=['GET', 'POST'])
def show_index():
    """Render main page."""
    if 'logged_in_user' not in flask.session:
        if flask.request.method == 'POST':
            username = flask.request.form['username']
            password = flask.request.form['password']
        
            # validate user
            all_users = chat.User.query.all()
            user_names = [ user.username for user in all_users ]

            # invalid username
            user = chat.User.query.filter_by(username=username).first()
            if user is None:
                return "<h1>Login Failed: Invalid User</h1>"
        
            # invalid password
            if user.password != password:
                return "<h1>Login Failed: Incorrect Password</h1>"
    
            # start user session
            flask.session['logged_in_user'] = username
            return flask.redirect(flask.url_for('show_profile', user_id=username))
        
        context = {}
        return flask.render_template("index.html", **context)
    else:
        # display home page for user (idk what this looks like yet)
        return flask.redirect(flask.url_for('show_profile',
                                            user_id=flask.session['logged_in_user']))


""" ------------------------------------------------------------------------ """
""" -------------------------- Register Page ------------------------------- """
""" ------------------------------------------------------------------------ """
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
            context = {
                "status": "bad username"
            }
            return flask.render_template("register.html", **context)

        # check for password correctness
        if flask.request.form['password'] != flask.request.form['password-2']:
            context = {
                "status": "bad password"
            }
            return flask.render_template("register.html", **context)

        # insert into db
        new_user = chat.User(flask.request.form['username'], flask.request.form['password'])
        chat.db.session.add(new_user)
        chat.db.session.commit()
        return flask.redirect(flask.url_for('show_index'))

    context = {
        "status": "no errors"
    }
    return flask.render_template("register.html", **context)


""" ------------------------------------------------------------------------ """
""" --------------------------- Profile Page ------------------------------- """
""" ------------------------------------------------------------------------ """
@chat.app.route('/profile/<user_id>/', methods=["GET"])
def show_profile(user_id):
    """Render profile page."""
    if 'logged_in_user' not in flask.session:
        return flask.redirect('show_index')

    # not logged in user's page
    if user_id != flask.session['logged_in_user']:
        flask.abort(403)

    # REACT Page
    context = {
        "logged_in_user": flask.session['logged_in_user']
    }
    return flask.render_template("profile.html", **context)


""" ------------------------------------------------------------------------ """
""" ---------------------------- Chat Page --------------------------------- """
""" ------------------------------------------------------------------------ """
@chat.app.route('/chat/<other_user>/', methods=["GET"])
def show_chat(other_user):
    """Render chat page."""
    if 'logged_in_user' not in flask.session:
        flask.abort(404)

    # REACT Page
    context = {
        "logged_in_user": flask.session['logged_in_user']
    }

    return flask.render_template("chat.html", **context)


""" ------------------------------------------------------------------------ """
""" --------------------------- Search Page -------------------------------- """
""" ------------------------------------------------------------------------ """
@chat.app.route('/search/', methods=["GET"])
def search():
    """Render search page."""
    if 'logged_in_user' not in flask.session:
        flask.redirect(flask.url_for('show_index'))

    # REACT Page
    context = {}
    return flask.render_template("search.html", **context)


""" ------------------------------------------------------------------------ """
""" --------------------------- Logout Page -------------------------------- """
""" ------------------------------------------------------------------------ """
@chat.app.route('/logout/', methods=["GET", "POST"])
def logout():
    """Handle logout."""
    if 'logged_in_user' not in flask.session:
        return flask.redirect(flask.url_for('show_index'))
    
    if flask.request.method == "POST":
        flask.session.pop('logged_in_user', None)
        return flask.redirect(flask.url_for('show_index'))

    context = {}
    return flask.render_template("logout.html", **context)

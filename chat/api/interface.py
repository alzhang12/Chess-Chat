"""REST API for chat app."""
import flask
import chat

@chat.app.route('/api/v1/users/', methods=["GET"])
def get_users():
    """Return users in search query."""
    # get user search query
    user_query = flask.request.args.get("search")
    
    # make query to db
    returned_user = chat.User.query.filter_by(username=user_query).first()

    context = {}
    if returned_user:
        context = {
            "username": returned_user.username
        }
    return flask.jsonify(**context)


@chat.app.route('/api/v1/messages/', methods=["GET"])
def get_messages():
    """Returns the 10 newest messages."""
    if 'logged_in_user' not in flask.session:
        flask.abort(404)
    
    # get url query parameters
    cur_user = flask.session['logged_in_user']
    other_user = flask.request.args.get("recipient")
    num_messages = flask.request.args.get("quantity", default=10, type=int)

    # make db query
    messages = chat.Message.query.filter_by(owner=cur_user, recipient=other_user).all()
    print(messages)

    context = {
        "messages": messages
    }
    return flask.jsonify(**context)


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

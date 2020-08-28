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


@chat.app.route('/api/v1/messages/', methods=["GET", "POST"])
def get_messages():
    """Returns the 10 newest messages."""
    if 'logged_in_user' not in flask.session:
        flask.abort(404)

    # POST request
    if flask.request.method == "POST":
        message = flask.request.json['content']
        receiver = flask.request.json['recipient']
        user = flask.session['logged_in_user']
        
        # insert into db
        new_message = chat.Message(user, receiver, message)
        chat.db.session.add(new_message)
        chat.db.session.commit()

        # get updated 10 newest messages
        s_messages = chat.Message.query.filter_by(owner=user, recipient=receiver).all()
        r_messages = chat.Message.query.filter_by(owner=receiver, recipient=user).all()
        all_messages = []
        for message in s_messages:
            cur_message = {
                "id": message.id,
                "content": message.content,
                "recipient": message.recipient,
                "owner": message.owner
            }
            all_messages.append(cur_message)
        for message in r_messages:
            cur_message = {
                "id": message.id,
                "content": message.content,
                "recipient": message.recipient,
                "owner": message.owner
            }
            all_messages.append(cur_message)

        # sort
        final = sorted(all_messages, key = lambda i: i['id'], reverse=True)

        response = {
            "messages": final[0:9]
        }
        return flask.jsonify(**response)
    
    # get url query parameters
    cur_user = flask.session['logged_in_user']
    other_user = flask.request.args.get("recipient")
    num_messages = flask.request.args.get("quantity", default=10, type=int)

    # make db query
    sent_messages = chat.Message.query.filter_by(owner=cur_user, recipient=other_user).all()
    received_messages = chat.Message.query.filter_by(owner=other_user, recipient=cur_user).all()
    all_messages = []
    for message in sent_messages:
        cur_message = {
            "id": message.id,
            "content": message.content,
            "recipient": message.recipient,
            "owner": message.owner
        }
        all_messages.append(cur_message)
    for message in received_messages:
        cur_message = {
            "id": message.id,
            "content": message.content,
            "recipient": message.recipient,
            "owner": message.owner
        }
        all_messages.append(cur_message)

    # sort
    final = sorted(all_messages, key = lambda i: i['id'], reverse=True)

    context = {
        "messages": final[0:9]
    }
    return flask.jsonify(**context)


@chat.app.route('/api/v1/friends/', methods=["GET"])
def get_friends():
    """Return list of friends."""
    if 'logged_in_user' not in flask.session:
        abort(404)
    
    # get all messages with user
    user = flask.session['logged_in_user']
    s_messages = chat.Message.query.filter_by(owner=user).all()
    r_messages = chat.Message.query.filter_by(recipient=user).all()
    messages = s_messages + r_messages

    # get all unique people in the list
    friends = []
    for message in messages:
        if message.owner != user and message.owner not in friends:
            friends.append(message.owner)
        if message.recipient != user and message.recipient not in friends:
            friends.append(message.recipient)

    # return
    context = {
        "friends": friends
    }
    return flask.jsonify(**context)

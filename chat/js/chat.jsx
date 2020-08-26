import React from 'react';
import Messages from './messages';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkMessages = this.checkMessages.bind(this);
    } 

    componentDidMount() {
        this.newMsg = setInterval(
            () => this.checkMessages(),
            2000
        );
        // get the 10 newest messages
        const path = location.pathname;
        const otherUser = path.split('/')[2];
        const endpoint = `/api/v1/messages/?recipient=${otherUser}&quantity=10`;

        console.log(endpoint);
        // send query 
        fetch(endpoint, {
            credentials: 'same-origin',
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        }).then((data) => {
            this.setState({
                messages: data.messages,
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    componentWillUnmount() {
        clearInterval(this.newMsg);
    }

    checkMessages() {
        // get the 10 newest messages
        const path = location.pathname;
        const otherUser = path.split('/')[2];
        const endpoint = `/api/v1/messages/?recipient=${otherUser}&quantity=10`;

        // send query 
        fetch(endpoint, {
            credentials: 'same-origin',
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        }).then((data) => {
            this.setState({
                messages: data.messages,
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({
            message: event.target.value,
        });
    }

    handleSubmit(event) {
        let { message } = this.state;

        // post new message to API endpoint
        const path = location.pathname;
        const otherUser = path.split('/')[2];
        const endpoint = `/api/v1/messages/`;
        let postObj = {
            content: message,
            recipient: otherUser,
        };

        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(postObj),
            headers: {
                'Content-Type': 'application/json',
              },
            credentials: 'same-origin',
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((data) => {
            // update state
            console.log(data);
            this.setState({
                messages: data.messages,
            });
        }).catch((error) => {
            console.log(error);
        })

        // prevent default event bevahior
        event.preventDefault();
    }

    render() {
        const { message } = this.state;
        const { messages } = this.state;

        return(
            <div className="chat-container">
                {messages.map(msg => (
                    <div className="message" key={msg.id}>
                        <h3>{msg.owner}</h3>
                        <p>{msg.content}</p>
                        <hr/>
                    </div>
                ))}
                {/* <Messages /> */}

                <div className="chat-input">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={message} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
        ); 
    }
}

export default Chat;
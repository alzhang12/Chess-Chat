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
    } 

    componentDidMount() {
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
        // post new message to API endpoint

        // prevent default event bevahior
        event.preventDefault();
    }

    render() {
        const { message } = this.state;
        const { messages } = this.state;

        return(
            <div className="chat-container">
                {messages.map(msg => <p key={msg.id}>{msg.content}</p>)}
                {/* <Messages /> */}

                <div className="chat-input">
                    <form>
                        <input type="text" value={message} onChange={this.handleChange} />
                    </form>
                </div>
            </div>
        ); 
    }
}

export default Chat;
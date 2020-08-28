import React from 'react';

class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
        };
    }

    componentDidMount() {
        const url = '/api/v1/friends/';
        fetch(url, {
            credentials: 'same-origin',
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        }).then((data) => {
            this.setState({
                friends: data.friends,
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { friends } = this.state;

        return (
            <div className="friends-container">
                <h2>Friends</h2>
                {friends.map(friend => {
                    let friendUrl = `/chat/${friend}/`;

                    return (
                        <div className='friend-link'>
                            <a href={friendUrl}><p>{friend}</p></a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Friends;

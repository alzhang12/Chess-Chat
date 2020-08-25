import React from 'react';
import Search from './search';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        
        this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty() {
        const { results } = this.props;

        for (let key in results) {
            return false;
        }
        return true;
    }

    render() {
        const { results } = this.props;
        

        if (this.isEmpty()) {
            return (
                <div className="search-results">
                    <p>No Results</p>
                </div>
            );
        } else {
            let user_url = `/chat/${results.username}/`;
            return(
                <div className="search-results">
                    <a href={user_url}>{results.username}</a>
                </div>
            );
        }
    }
}

export default SearchResults;

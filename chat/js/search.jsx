import React from 'react';
import SearchResults from './serach-results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchResults: {},
        }

        this.formQuery = this.formQuery.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formQuery() {
        const { searchQuery } = this.state;

        // split query by whitespace
        let query = searchQuery.split(' ');
        let finalQuery = '';
        for (let i = 0; i < query.length; ++i) {
            finalQuery += query[i]
            if (i < query.length - 1) {
                finalQuery += '+';
            }
        }

        return finalQuery;
    }

    handleQueryChange(event) {
        this.setState({
            searchQuery: event.target.value,
        });
    }

    handleSubmit(event) {
        const q = this.formQuery();
        const url = `/api/v1/users/?search=${q}`;
        fetch(url, {
            credentials: 'same-origin',
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((data) => {
            this.setState({
                searchResults: data,
            });
        }).catch((error) => {
            console.log(error);
        });

        event.preventDefault();
    }

    render() {
        const { searchQuery } = this.state;
        const { searchResults } = this.state;

        return (
            <div className="search-container">
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={searchQuery} onChange={this.handleQueryChange} />
                        <input type="submit" value="search" />
                    </form>
                </div>

                <SearchResults results={searchResults} />
            </div>
        );
    }
}

export default Search;

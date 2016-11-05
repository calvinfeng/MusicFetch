import React                                from 'react';
import { connect }                          from 'react-redux';

import RecentSearch                         from './RecentSearch';
import Result                               from './Result';

import { artistLookup, artistSaveToServer } from '../actions/artistActions';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.printArtistNames = this.printArtistNames.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
        this.updateInputField = this.updateInputField.bind(this);
    }

    printArtistNames() {
        if (this.props.artists) {
            let artists = this.props.artists;
            return Object.keys(artists).map((id) => {
                return <li key={id}>{ artists[id].name }</li>;
            });
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    submitHandle(event) {
        event.preventDefault();
        const artistName = this.state.inputValue;
        this.props.dispatchArtistLookup(artistName);
    }

    updateInputField(event) {
        event.preventDefault();
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div className="search-container">
                <RecentSearch recentSearchResults={this.props.recentSearchResults}/>
                <form onSubmit={this.submitHandle}>
                    <input width="400" onChange={this.updateInputField}></input>
                    <input type="submit"></input>
                    <div>Input value: {this.state.inputValue}</div>
                </form>
                <Result
                    searchResults={this.props.searchResults}
                    artistSaveToServer={this.props.dispatchArtistSaveToServer}
                    />
            </div>
        );
    }
}

const mapReduxStateToProps = (state) => ({
    searchResults: state.artists.searchResults,
    recentSearchResults: state.recentSearchResults
});

const mapDispatchToProps = (dispatch) => ({
    dispatchArtistLookup: (artistName) => dispatch(artistLookup(artistName)),
    dispatchArtistSaveToServer: (artist) => dispatch(artistSaveToServer(artist))
});

export default connect(mapReduxStateToProps, mapDispatchToProps)(SearchContainer);

import React       from 'react';

class Result extends React.Component {

    constructor() {
        super();
        this.clickHandle = this.clickHandle.bind(this);
        this.printArtistNames = this.printArtistNames.bind(this);
    }

    clickHandle(event) {
        let artists = this.props.searchResults;
        this.props.artistSaveToServer(artists[event.target.id]);
    }

    printArtistNames() {
        if (this.props.searchResults) {
            let artists = this.props.searchResults;
            return Object.keys(artists).map((id) => {
                return (
                    <li key={id} id={id} onClick={this.clickHandle}>
                        { artists[id].name }
                    </li>
                );
            });
        }
    }

    render() {
        return <ul>{this.printArtistNames()}</ul>;
    }
}

export default Result;

import { connect } from 'react-redux';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    printArtistNames() {
        if (this.props.artists) {
            let artists = this.props.artists;
            return Object.keys(artists).map((id) => {
                return <li key={id}>{ artists[id].name }</li>;
            });
        }
    }

    queryArtist() {
        let artistName = this.state.inputValue;
        this.props.dispatchArtistDataFetch(artistName);
    }

    updateInputField(event) {
        event.preventDefault();
        this.setState({ inputValue: event.target.value });
    }

    render() {
        <div className = 
    }
}

// import merge from 'lodash/merge';

import { ARTIST_LOOKUP_SUCCESS } from '../actions/artistActions';
import { ARTIST_LOOKUP_FAIL }    from '../actions/artistActions';
import { ARTIST_SAVE_SUCCESS  }  from '../actions/artistActions';
import { ARTIST_SAVE_FAIL }      from '../actions/artistActions';


const artistsReducer = (state = {}, action) => {
    //let nextState = merge({}, state);
    let nextState = {};
    switch (action.type) {

        case ARTIST_LOOKUP_SUCCESS:
        let items = action.artistItems;
        nextState['searchResults'] = {}
        items.forEach((item) => {
            nextState['searchResults'][item.id] = {
                name: item.name,
                spotifyId: item.id,
                images: item.images,
                spotifyPage: item.external_urls.spotify,
                popularity: item.popularity
            }
        });
        return nextState;

        case ARTIST_SAVE_FAIL:
        console.log(action.data.responseText);
        return state;

        case ARTIST_SAVE_SUCCESS:
        console.log(action.resData)
        console.log("Saved!");
        return state;

        default:
        return state;

    }
};

export default artistsReducer;

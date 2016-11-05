import request from 'axios';
import $       from 'jquery';

export const ARTIST_LOOKUP_SUCCESS = 'ARTIST_LOOKUP_SUCESS';
export const ARTIST_LOOKUP_FAIL = 'ARTIST_LOOKUP_FAIL';
export const EMPTY_ARTIST_DATA = 'EMPTY_ARTIST_DATA';

export const ARTIST_SAVE_SUCCESS = 'ARTIST_SAVE_SUCCESS';
export const ARTIST_SAVE_FAIL = 'ARTIST_SAVE_FAIL';


export const artistLookupSuccess = (data) => {
    return {
        type: ARTIST_LOOKUP_SUCCESS,
        artistItems: data.artists.items
    };
};

export const artistLookupFail = (error) => {
    return {
        type: ARTIST_LOOKUP_FAIL,
        error: error
    };
};

export const artistSaveSuccess = (data) => {
    return {
        type: ARTIST_SAVE_SUCCESS,
        resData: data
    };
}

export const artistSaveFail = (data) => {
    return {
        type: ARTIST_SAVE_FAIL,
        data: data
    };
}

export const artistLookup = function(artistName) {
    return function(dispatch) {
        if (artistName.length > 0) {
            request.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`)
            .then(res => dispatch(artistLookupSuccess(res.data)))
            .catch(error => dispatch(artistLookupFail(error)));
        }
    }
}

export const artistSaveToServer = function(artist) {
    const artistInfo = {
        name: artist.name,
        spotify_id: artist.spotifyId,
        spotify_page: artist.spotifyPage,
        popularity: artist.popularity
    };
    return function(dispatch) {
        $.ajax({
            url: '/api/artists/',
            method: 'POST',
            type: "JSON",
            data: artistInfo,
            success: (res) => dispatch(artistSaveSuccess(res.data)),
            error: (error) => dispatch(artistSaveFail(error))
        })
    }
}

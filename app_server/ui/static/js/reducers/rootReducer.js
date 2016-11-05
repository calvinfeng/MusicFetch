import artistsReducer from './artistsReducer';

// Thirdparty
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  artists: artistsReducer
});

export default rootReducer;

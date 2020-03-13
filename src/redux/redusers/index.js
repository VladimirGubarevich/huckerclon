import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    postsReducer,
    filterReducer
  })
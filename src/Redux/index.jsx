import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LinksReducer from './LinksReducer';

export default combineReducers({ UserReducer, LinksReducer });

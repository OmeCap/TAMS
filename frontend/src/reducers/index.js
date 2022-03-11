import { combineReducers } from 'redux';
import account from './account';
import taProfile from './taProfile';

export default combineReducers({ account, taProfile });
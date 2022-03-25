import { combineReducers } from 'redux';
import account from './account';
import taProfile from './taProfile';
import accountInfo from './accountInfo';

export default combineReducers({ 
    account, 
    taProfile,
    accountInfo
});
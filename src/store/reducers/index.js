import { combineReducers } from "redux";
import auth from './authReducer';
import chat from "./chatReducers";


export default combineReducers({
    auth,
    chat
});
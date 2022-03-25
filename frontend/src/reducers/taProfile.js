import { TAPROFILE } from "../actions/types";
import fetchStates from "./fetchStates";

const DEAFULT_PROFILE = [];

const taProfile = (state = DEAFULT_PROFILE, action) => {
    switch(action.type) {
        case TAPROFILE.FETCH:
            return {...state, status: fetchStates.fetching };
        case TAPROFILE.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message }
        case TAPROFILE.FETCH_SUCCESS:
            return { 
                ...state, 
                status: fetchStates.success,
                message: action.message
            }
        default:
            return state;
    }
}

export default taProfile;
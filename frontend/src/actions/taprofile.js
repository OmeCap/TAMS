import { TAPROFILE } from "./types";
import { BACKEND } from "../config";

export const fetchFromTaProfile = ({
    endpoint,
    options,
    FETCH_TYPE,
    ERROR_TYPE,
    SUCCESS_TYPE
  }) => dispatch => {
    dispatch({ type: FETCH_TYPE });
  
    return fetch(`${BACKEND.ADDRESS}/ta/${endpoint}`, options)
      .then(response => response.json())
      .then(json => {
        if (json.type === 'error') {
          dispatch({ type: ERROR_TYPE, message: json.message });
        } else {
          dispatch({ type: SUCCESS_TYPE, ...json });
        }
      })
      .catch(error => dispatch({
        type: ERROR_TYPE, message: error.message
      }));
  }

  export const uploadProfile = ({ email, upi, homeAddress, currentYear, roleType, feeStatus }) => fetchFromTaProfile({
    endpoint: 'profile',
    options: {
      method: 'POST',
      body: JSON.stringify({ email, upi, homeAddress, currentYear, roleType, feeStatus }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    },
    FETCH_TYPE: TAPROFILE.FETCH,
    ERROR_TYPE: TAPROFILE.FETCH_ERROR,
    SUCCESS_TYPE: TAPROFILE.FETCH_SUCCESS
  });
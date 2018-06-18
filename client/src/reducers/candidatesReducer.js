import {
  GET_CANDIDATES_REQUEST,
  GET_CANDIDATES_RECEIVE,
  GET_CANDIDATES_FAILURE
} from "../actions/getCandidatesActions";

const initState = {
  error: null,
  isGetting: true,
  items: [ ]
};

const candidatesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CANDIDATES_REQUEST:
      return {
        ...state,
        error: null,
        isGetting: true
      };
    case GET_CANDIDATES_RECEIVE:
      return {
        ...state,
        isGetting: false,
        items: action.candidates
      };
    case GET_CANDIDATES_FAILURE:
      return {
        ...state,
        error: action.error,
        isGetting: false
      };
    default:
      return state;
  }
};

export default candidatesReducer;

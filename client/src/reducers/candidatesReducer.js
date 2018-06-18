import {
  GET_CANDIDATES_REQUEST,
  GET_CANDIDATES_RECEIVE,
  GET_CANDIDATES_FAILURE,
  PATCH_CANDIDATE_SUCCESS
} from "../actions/candidatesActions";

const initCandidatesState = {
  error: null,
  isGetting: true,
  items: [ ]
};
const candidatesReducer = (state = initCandidatesState, action) => {
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
    case PATCH_CANDIDATE_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if(item.id === action.id) {
            item.status = action.status;
          }

          return item;
        })
      };
    default:
      return state;
  }
};

export default candidatesReducer;

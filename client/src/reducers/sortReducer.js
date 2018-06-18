import { SELECT_SORT } from "../actions/candidatesActions";

const sortReducer = (state = "default", action) => {
  switch (action.type) {
    case SELECT_SORT:
      return action.sort;
    default:
      return state;
  }
};

export default sortReducer;

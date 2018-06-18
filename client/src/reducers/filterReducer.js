import { SELECT_FILTER } from "../actions/candidatesActions";

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;

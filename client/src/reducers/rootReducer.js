import { combineReducers } from "redux";

import candidatesReducer from "./candidatesReducer";
import filterReducer from "./filterReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  candidates: candidatesReducer,
  filter: filterReducer,
  sort: sortReducer
});

export default rootReducer;

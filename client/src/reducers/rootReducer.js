import { combineReducers } from "redux";

import candidatesReducer from "./candidatesReducer";

const rootReducer = combineReducers({
  candidates: candidatesReducer
});

export default rootReducer;

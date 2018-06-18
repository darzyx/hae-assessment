import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./utils/registerServiceWorker";
import rootReducer from "./reducers/rootReducer";

const middleware = [ thunk ];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

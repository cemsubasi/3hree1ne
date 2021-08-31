import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import "./css/index.css";
import Client from "./Client";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Client />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

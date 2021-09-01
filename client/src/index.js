import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Client from "./Client";
import { reducer } from "./reducers";
import "./css/index.css";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Client />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

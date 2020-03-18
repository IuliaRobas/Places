import React from "react";
import { AppRegistry } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import authReducer from "./store/reducers/auth";
import App from "./App";

const rootReducer = authReducer;
export const store = createStore(rootReducer);

const Root = props => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

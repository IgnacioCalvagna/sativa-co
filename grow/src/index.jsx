import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./state/store"
import "./style/root.css"

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/data/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./GlobalStyle";
import LocaleProvider from "./providers/LocaleProvider/LocaleProvider";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

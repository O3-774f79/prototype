import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import TestStore from "./store/test";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider teststore={TestStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

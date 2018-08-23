import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import TestStore from "./store/test";
import Store2th from "./store/store2th";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider teststore={TestStore} store2th={Store2th}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

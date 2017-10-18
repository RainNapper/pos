import { IRootStoreState, rootReducer } from "client/app/store/reducers/root";
import App from "client/app/ui/components/app";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

// TODO: Add middleware
const store: Store<IRootStoreState> = createStore<IRootStoreState>(rootReducer);

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root"),
);

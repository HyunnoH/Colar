import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import sagas from "./store/sagas";

// import reducer from "./store/reducer";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(sagas);
// console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

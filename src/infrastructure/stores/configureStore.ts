import { configureStore as configureReduxStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export function configureStore() {
  const store = configureReduxStore({
    reducer: rootReducer,
  });

  return store;
}

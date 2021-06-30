import { combineReducers } from "redux";
import toolbarSlice from "./modules/toolbar";

export const rootReducer = combineReducers({
  [toolbarSlice.name]: toolbarSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

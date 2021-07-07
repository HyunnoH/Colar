import { combineReducers } from "redux";
import colorSlice from "./modules/color";
import toolbarSlice from "./modules/toolbar";

export const rootReducer = combineReducers({
  [toolbarSlice.name]: toolbarSlice.reducer,
  [colorSlice.name]: colorSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

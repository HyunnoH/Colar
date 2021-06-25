import { combineReducers } from "redux";
import toolbarSlice from "./modules/toolbar";

export const rootReducer = combineReducers(toolbarSlice.reducer);

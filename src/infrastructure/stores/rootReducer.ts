import toolbarSlice from "./modules/toolbar";

export const rootReducer = {
  [toolbarSlice.name]: toolbarSlice.reducer,
};

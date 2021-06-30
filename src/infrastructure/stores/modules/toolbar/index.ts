import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolbarMods, ToolbarState } from "./types";

const initialState: ToolbarState = {
  mod: "brush",
};

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    changeMode: (_, action: PayloadAction<ToolbarMods>) => {
      return {
        mod: action.payload,
      };
    },
  },
});

export default toolbarSlice;

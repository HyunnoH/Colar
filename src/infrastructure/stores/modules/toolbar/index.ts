import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolbarMods } from "./types";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    mod: "brush",
  },
  reducers: {
    changeMode: (_, action: PayloadAction<ToolbarMods>) => {
      return {
        mod: action.payload,
      };
    },
  },
});

export default toolbarSlice;

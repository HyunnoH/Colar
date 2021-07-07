import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolbarMods, ToolbarState } from "./types";

const initialState: ToolbarState = {
  mod: "brush",
  brushSize: 10,
};

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<ToolbarMods>) => {
      return {
        ...state,
        mod: action.payload,
      };
    },
    changeBrushSize: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        brushSize: action.payload,
      };
    },
  },
});

export default toolbarSlice;

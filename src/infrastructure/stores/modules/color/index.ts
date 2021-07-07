import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorState } from "./types";

const initialState: ColorState = {
  color: "#ff0000",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (_, action: PayloadAction<string>) => {
      return {
        color: action.payload,
      };
    },
  },
});

export default colorSlice;

export * from "./hooks";
export * from "./types";

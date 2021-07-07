import { useReducer } from "react";

type ColorState = {
  h: number;
  s: number;
  v: number;
};

type ColorAction =
  | {
      type: "h";
      h: number;
    }
  | {
      type: "sv";
      s: number;
      v: number;
    };

const initialState: ColorState = {
  h: 0,
  s: 1,
  v: 1,
};

const reducer = (state: ColorState, action: ColorAction) => {
  switch (action.type) {
    case "h": {
      return {
        ...state,
        h: action.h,
      };
    }
    case "sv": {
      return {
        ...state,
        s: action.s,
        v: action.v,
      };
    }
    default: {
      throw new Error("Invalid action detected");
    }
  }
};

export const useColorPickerReducer = () => useReducer(reducer, initialState);

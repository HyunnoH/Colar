const CANVAS = "CANVASINFO/CANVAS";
const CONTEXT = "CANVASINFO/CONTEXT";
const DIV = "CANVASINFO/DIV";
const IMG = "CANVASINFO/IMG";

export const setCanvas = canvas => ({
  type: CANVAS,
  canvas
});
export const setContext = context => ({
  type: CONTEXT,
  context
});

export const setDiv = div => ({
  type: DIV,
  div
});

export const setImg = img => ({
  type: IMG,
  img
});

const initialState = {
  canvas: null,
  context: null,
  div: null,
  img: null
};

export default function CanvasInfo(state = initialState, action) {
  switch (action.type) {
    case CANVAS:
      return {
        ...state,
        canvas: action.canvas
      };
    case CONTEXT:
      return {
        ...state,
        context: action.context
      };
    case DIV:
      return {
        ...state,
        div: action.div
      };
    case IMG:
      return {
        ...state,
        img: action.img
      };
    default:
      return state;
  }
}

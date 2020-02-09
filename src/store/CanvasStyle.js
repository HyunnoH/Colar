const COLOR = "CANVAS/COLOR";
const THICKNESS = "CANVAS/THICKNESS";
const PENTYPE = "CANVAS/PENTYPE";
const LEFT = "CANVASINFO/LEFT";
const TOP = "CANVASINFO/TOP";

export const changeColor = color => ({
  type: COLOR,
  color
});

export const changeThickness = thickness => ({
  type: THICKNESS,
  thickness
});

export const changePenType = penType => ({
  type: PENTYPE,
  penType
});

export const updateLeft = left => ({
  type: LEFT,
  left
});

export const updateTop = top => ({
  type: TOP,
  top
});

const initialState = {
  color: "#000",
  thickness: 5,
  penType: "brush",
  left: 0,
  top: 0
};

export default function CanvasStyle(state = initialState, action) {
  switch (action.type) {
    case COLOR:
      return {
        ...state,
        color: action.color
      };
    case THICKNESS:
      return {
        ...state,
        thickness: action.thickness
      };
    case PENTYPE:
      return {
        ...state,
        penType: action.penType
      };
    case LEFT:
      return {
        ...state,
        left: action.left
      };
    case TOP:
      return {
        ...state,
        top: action.top
      };
    default:
      return state;
  }
}

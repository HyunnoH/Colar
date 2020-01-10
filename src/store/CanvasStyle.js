const COLOR = "CANVAS/COLOR";
const THICKNESS = "CANVAS/THICKNESS";
const PENTYPE = "CANVAS/PENTYPE";

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

const initialState = {
  color: "#000",
  thickness: 5,
  penType: "brush"
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
    default:
      return state;
  }
}

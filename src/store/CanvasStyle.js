const COLOR = "CANVAS/COLOR";
const THICKNESS = "CANVAS/THICKNESS";

export const changeColor = color => ({
  type: COLOR,
  color
});
export const changeThickness = thickness => ({
  type: THICKNESS,
  thickness
});

const initialState = {
  color: "#000",
  thickness: 5
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
    default:
      return state;
  }
}

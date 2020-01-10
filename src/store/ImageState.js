const WIDTH = "IMAGESTATE/WIDTH";
const HEIGHT = "IMAGESTATE/HEIGHT";

export const changeWidth = width => ({
  type: WIDTH,
  width
});

export const changeHeight = height => ({
  type: HEIGHT,
  height
});

const initialState = {
  width: 0,
  height: 0
};

export default function ImageState(state = initialState, action) {
  switch (action.type) {
    case WIDTH:
      return {
        ...state,
        width: action.width
      };
    case HEIGHT:
      return {
        ...state,
        height: action.height
      };
    default:
      return state;
  }
}

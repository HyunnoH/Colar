const PENTYPE = "PENTYPE/PENTYPE";

export const changePenType = penType => ({
  type: PENTYPE,
  penType
});

const initialState = {
  penType: "brush"
};

export default function PenType(state = initialState, action) {
  switch (action.type) {
    case PENTYPE:
      return {
        ...state,
        penType: action.penType
      };
    default:
      return state;
  }
}

const OPEN_FILE = "file/OPEN_FILE";
const SEND_FILE = "file/SEND_FILE";

export const openFile = path => ({ type: OPEN_FILE, path });
export const sendFile = data => ({ type: SEND_FILE, data });

const initialState = {
  path: "",
  data: {}
};

export default function file(state = initialState, action) {
  switch (action.type) {
    case OPEN_FILE:
      return {
        ...state,
        path: action.path
      };
    case SEND_FILE:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

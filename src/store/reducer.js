import { combineReducers } from "redux";
import CanvasStyle from "./CanvasStyle";
import ImageState from "./ImageState";
import CanvasInfo from "./CanvasInfo";

export default combineReducers({
  CanvasStyle,
  ImageState,
  CanvasInfo
});

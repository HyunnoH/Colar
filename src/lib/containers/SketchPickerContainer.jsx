import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SketchPicker } from "react-color";
import { changeColor } from "../../store/CanvasStyle";

const SketchPickerContainer = () => {
  const selectedColor = useSelector(state => state.CanvasStyle, []);
  const dispatch = useDispatch();

  const handleChangeComplete = color => {
    dispatch(changeColor(color.hex));
  };

  return (
    <SketchPicker
      color={selectedColor.color}
      onChangeComplete={handleChangeComplete}
    />
  );
};

export default SketchPickerContainer;

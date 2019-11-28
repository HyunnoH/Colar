import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../Components/Slider";
import { changeThickness } from "../../store/CanvasStyle";

const SliderContainer = () => {
  const selectedThickness = useSelector(state => state.CanvasStyle);
  const dispatch = useDispatch();

  const handleSliderChange = () => {
    const slider = document.getElementById("slider").value;
    dispatch(changeThickness(slider));
  };

  return (
    <Slider
      min="1"
      max="40"
      onInput={handleSliderChange}
      displayValue={selectedThickness.thickness}
    />
  );
};

export default SliderContainer;

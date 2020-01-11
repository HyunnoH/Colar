import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../Components/Slider";
import { changeThickness } from "../../store/CanvasStyle";

const SliderContainer = () => {
  const sliderRef = useRef();
  const value = useRef(5);
  const selectedThickness = useSelector(state => state.CanvasStyle);
  const dispatch = useDispatch();

  const handleSliderChange = () => {
    // console.log(sliderRef.current);
    // const slider = sliderRef.current.value;
    const slider = document.getElementById("slider").value;
    dispatch(changeThickness(slider));
    value.current = slider;
  };

  return (
    <Slider
      min="1"
      max="40"
      value={value.current}
      onChange={handleSliderChange}
      displayValue={String(selectedThickness.thickness)}
    />
  );
};

export default SliderContainer;

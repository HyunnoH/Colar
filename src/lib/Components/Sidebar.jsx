import React from "react";
import { css } from "emotion";
import SketchPickerContainer from "../containers/SketchPickerContainer";
import SliderContainer from "../containers/SliderContainer";
import ZoomerContainer from "../containers/ZoomerContainer";

const Sidebar = () => {
  return (
    <aside className={pickerStyle}>
      <SketchPickerContainer />
      <SliderContainer />
      <ZoomerContainer />
    </aside>
  );
};

const pickerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: darkgray;
  border: 2px solid darkgray;
`;
export default Sidebar;

import React from "react";
import { css } from "emotion";

const Slider = ({ min, max, value, onChange, displayValue }) => {
  return (
    <div className={outerDivStyle}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={inputStyle}
        onChange={onChange}
        id="slider"
      />
      <span>{displayValue}</span>
    </div>
  );
};

const outerDivStyle = css`
  border-radius: 2px;
  background-color: white;
  padding: 2%;
`;

const inputStyle = css`
  width: 100%;
  background-color: black;
`;
export default Slider;

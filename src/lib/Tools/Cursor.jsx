import React from "react";
import { css } from "emotion";
import { useSelector } from "react-redux";

const Cursor = () => {
  const cursorStyle = useSelector(state => state.CanvasStyle);

  return (
    <div
      className={cursor}
      style={{
        width: Number(cursorStyle.thickness),
        height: Number(cursorStyle.thickness),
        border: "2px solid " + cursorStyle.color,
        left: cursorStyle.left,
        top: cursorStyle.top
      }}></div>
  );
};

const cursor = css`
  position: absolute;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 4;
  pointer-events: none;
`;
export default Cursor;

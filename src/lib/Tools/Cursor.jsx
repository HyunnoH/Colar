import React, { useRef } from "react";
import { css } from "emotion";

const Cursor = ({ reff }) => {
  return <div className={cursor} ref={reff}></div>;
};

const cursor = css`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid red;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 2;
`;
export default Cursor;

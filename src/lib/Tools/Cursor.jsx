import React from "react";
import { css } from "emotion";

const Cursor = () => {
  return <div className={cursor}></div>;
};

const cursor = css`
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    box-sizing: border-box;
    transition: 0.1s;
    transform
`;
export default Cursor;

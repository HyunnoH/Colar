import React from "react";
import { css } from "emotion";
import Renderer from "../Tools/Renderer";

const SelectedImage = ({ filePath }) => {
  const replaceAll = (that, org, dest) => that.split(org).join(dest);
  return (
    <div className={imgContainer}>
      <Renderer
        src={`file:///${replaceAll(filePath, "\\", "/")}`}
        imgstyle={imgstyle}
      />
    </div>
  );
};

const imgContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const imgstyle = css`
  border: 2px solid darkgray;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
`;
export default SelectedImage;

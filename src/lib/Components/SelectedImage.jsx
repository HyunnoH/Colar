import React from "react";
import { css } from "emotion";
import Renderer from "../Tools/Renderer";

const SelectedImage = ({ filePath }) => {
  const replaceAll = (that, org, dest) => that.split(org).join(dest);
  return (
    <Renderer
      src={`file:///${replaceAll(filePath, "\\", "/")}`}
      imgstyle={imgstyle}
      id="image"
    />
  );
};

const imgstyle = css`
  position: absolute;
  border: 2px solid darkgray;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
`;
export default SelectedImage;

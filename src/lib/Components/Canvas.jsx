import React, { useRef, useEffect, useState } from "react";
import { css } from "emotion";
import Drawing from "../Tools/Drawing";

const Canvas = ({ imagePath }) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const bg = new window.Image();
    bg.src = imagePath;
  }, [imagePath]);

  return (
    <div className={stageClass}>
      <img
        src={imagePath}
        alt={imagePath}
        className={imageClass}
        onLoad={e => {
          setWidth(e.target.scrollWidth);
          setHeight(e.target.scrollHeight);
        }}
      />
      <Drawing width={width} height={height} />
    </div>
  );
};

const stageClass = css`
  position: relative;
  overflow: auto;
  width: 100%;
`;

const imageClass = css`
  position: absolute;
  z-index: -1;
`;
export default Canvas;

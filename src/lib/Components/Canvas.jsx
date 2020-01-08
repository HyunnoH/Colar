import React, { useRef, useEffect, useState } from "react";
import { css } from "emotion";
import Drawing from "../Tools/Drawing";

const Canvas = ({ imagePath }) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });

  const divRef = useRef();

  useEffect(() => {
    const bg = new window.Image();
    bg.src = imagePath;
  }, [imagePath]);

  const updateScrollPosition = () => {
    setScrollPosition({
      left: divRef.current.scrollLeft,
      top: divRef.current.scrollTop
    });
  };

  return (
    <div ref={divRef} className={stageClass} onScroll={updateScrollPosition}>
      <img
        src={imagePath}
        alt={imagePath}
        className={imageClass}
        onLoad={e => {
          setWidth(e.target.scrollWidth);
          setHeight(e.target.scrollHeight);
        }}
      />
      <Drawing width={width} height={height} scrollPosition={scrollPosition} />
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
  z-index: 2;
`;
export default Canvas;

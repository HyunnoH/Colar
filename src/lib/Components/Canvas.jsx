import React, { useRef, useEffect, useState } from "react";
import { css } from "emotion";
import Drawing from "./Drawing";
import BackgroundImage from "./BackgroundImg";

const Canvas = ({ imagePath }) => {
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });

  const divRef = useRef();

  const updateScrollPosition = () => {
    setScrollPosition({
      left: divRef.current.scrollLeft,
      top: divRef.current.scrollTop
    });
  };

  return (
    <div ref={divRef} className={stageClass} onScroll={updateScrollPosition}>
      <BackgroundImage imgPath={imagePath} />
      <Drawing scrollPosition={scrollPosition} />
    </div>
  );
};

const stageClass = css`
  position: relative;
  overflow: auto;
  width: 100%;
`;

export default Canvas;

import React, { useRef, useState, useEffect } from "react";
import { css } from "emotion";
import Drawing from "./Drawing";
import BackgroundImage from "./BackgroundImg";
import { setDiv } from "../../store/CanvasInfo";
import { useDispatch } from "react-redux";
// import Cursor from "../Tools/Cursor";

const Canvas = ({ imagePath }) => {
  const [scrollPosition, setScrollPosition] = useState({ left: 0, top: 0 });
  const dispatch = useDispatch();
  const divRef = useRef();

  useEffect(() => {
    dispatch(setDiv(divRef.current));
  }, []);

  const updateScrollPosition = () => {
    setScrollPosition({
      left: divRef.current.scrollLeft,
      top: divRef.current.scrollTop
    });
  };

  return (
    <div ref={divRef} className={stageClass} onScroll={updateScrollPosition}>
      {/* <Cursor /> */}
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

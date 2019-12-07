import React, { useState, useEffect, useRef } from "react";
import { css } from "emotion";
// import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";
import { useSelector } from "react-redux";
import Drawing from "../Tools/Drawing";

const Canvas = ({ imagePath }) => {
  const div = document.getElementsByTagName("div")[0];
  const [image, setImage] = useState();

  const imageRef = useRef();
  const canvasStore = useSelector(state => state.CanvasStyle);
  const modeStore = useSelector(state => state.PenType);

  useEffect(() => {
    const bg = new window.Image();
    bg.src = imagePath;
    bg.onload = () => {
      setImage(bg);
    };
  }, [imagePath]);

  return (
    <div className={stageClass}>
      <img src={imagePath} alt={imagePath} className={imageClass} />
      <Drawing
        color={canvasStore.color}
        penType={modeStore.penType}
        thickness={canvasStore.thickness}
        width={div.clientWidth - 224}
      />
    </div>
    // <Stage width={div.clientWidth - 224} height={div.clientHeight}>
    //   <Layer>
    //     {image ? (
    //       <Image image={image} ref={imageRef} className={stageClass} />
    //     ) : (
    //       <></>
    //     )}
    //   </Layer>
    //   <Layer>
    //     <Drawing
    //       color={canvasStore.color}
    //       penType={modeStore.penType}
    //       thickness={canvasStore.thickness}
    //       width={div.clientWidth - 224}
    //     />
    //   </Layer>
    // </Stage>
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

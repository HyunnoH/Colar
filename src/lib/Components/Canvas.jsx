import React, { useState, useEffect } from "react";
// import { css } from "emotion";
// import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";
import { useSelector } from "react-redux";
import Drawing from "../Tools/Drawing";

const Canvas = ({ imagePath }) => {
  const div = document.getElementsByTagName("div")[2];
  const [image, setImage] = useState();

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
    <Stage width={div.clientWidth - 224} height={div.clientHeight}>
      <Layer>
        {image ? <Image image={image} width={div.clientWidth - 224} /> : <></>}
      </Layer>
      <Layer>
        <Drawing
          color={canvasStore.color}
          penType={modeStore.penType}
          thickness={canvasStore.thickness}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;

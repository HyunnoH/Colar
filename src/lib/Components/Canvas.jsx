import React, { useState } from "react";
import { css } from "emotion";
import Konva from "konva";
import { Stage, Layer } from "react-konva";
import { addLine } from "../Tools/Draw";

const Canvas = imagePath => {
  return (
    <Stage>
      <Layer></Layer>
      <Layer></Layer>
    </Stage>
  );
};

const canvasStyle = css`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
`;
export default Canvas;

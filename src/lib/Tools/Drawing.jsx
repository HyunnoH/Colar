import React, { useState, useLayoutEffect, useCallback, useRef } from "react";
import { css } from "emotion";
const Drawing = ({ color, penType, thickness, width }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);

  const imgRef = useRef(null);
  const lastPointerPositionRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = imgRef.current;
    canvas.width = width;
    canvas.height = 300;
    const context = canvas.getContext("2d");

    setCanvas(canvas);
    setContext(context);
  }, [setCanvas, setContext, width]);

  const handleMouseDown = () => {
    // console.log(penType);
    setIsDrawing(true);
    console.log(imgRef.current.x);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseMove = () => {
    if (isDrawing) {
      context.strokeStyle = color;
      context.lineJoin = "round";
      context.lineWidth = thickness;

      if (penType === "brush") {
        context.globalCompositeOperation = "source-over";
      } else if (penType === "eraser") {
        context.globalCompositeOperation = "destination-out";
      }

      console.log();
      // context.beginPath();

      // var localPos = {
      //   x: lastPointerPositionRef.current.x - imgRef.current.x(),
      //   y: lastPointerPositionRef.current.y - imgRef.current.y()
      // };
      // // console.log("moveTo", localPos);
      // context.moveTo(localPos.x, localPos.y);
      // // TODO: improve
      // const stage = imgRef.current.parent.parent;
      // var pos = stage.getPointerPosition();
      // localPos = {
      //   x: pos.x - imgRef.current.x(),
      //   y: pos.y - imgRef.current.y()
      // };
      // // console.log("lineTo", localPos);
      // context.lineTo(localPos.x, localPos.y);
      // context.closePath();
      // context.stroke();
      // lastPointerPositionRef.current = pos;
      // imgRef.current.getLayer().draw();
    }
  };

  return (
    <canvas
      ref={imgRef}
      className={canvasStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

const canvasStyle = css``;
export default Drawing;

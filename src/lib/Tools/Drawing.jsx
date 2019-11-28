import React, { useState, useEffect, useCallback, useRef } from "react";
import { Image } from "react-konva";

const Drawing = ({ color, penType, thickness }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);

  const imgRef = useRef(null);
  const lastPointerPositionRef = useRef(null);

  useEffect(() => {
    // console.log(color, penType);
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext("2d");

    setCanvas(canvas);
    setContext(context);
  }, [setCanvas, setContext]);

  const handleMouseDown = () => {
    console.log(penType);
    setIsDrawing(true);

    const stage = imgRef.current.parent.parent;
    lastPointerPositionRef.current = stage.getPointerPosition();
  };

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, [setIsDrawing]);

  const handleMouseMove = useCallback(() => {
    if (isDrawing) {
      context.strokeStyle = color;
      context.lineJoin = "round";
      context.lineWidth = thickness;

      if (penType === "brush") {
        context.globalCompositeOperation = "source-over";
      } else if (penType === "eraser") {
        context.globalCompositeOperation = "destination-out";
      }
      context.beginPath();

      var localPos = {
        x: lastPointerPositionRef.current.x - imgRef.current.x(),
        y: lastPointerPositionRef.current.y - imgRef.current.y()
      };
      // console.log("moveTo", localPos);
      context.moveTo(localPos.x, localPos.y);

      // TODO: improve
      const stage = imgRef.current.parent.parent;

      var pos = stage.getPointerPosition();
      localPos = {
        x: pos.x - imgRef.current.x(),
        y: pos.y - imgRef.current.y()
      };
      // console.log("lineTo", localPos);
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      lastPointerPositionRef.current = pos;
      imgRef.current.getLayer().draw();
    }
  }, [context, isDrawing, penType, color, thickness]);

  return (
    <Image
      image={canvas}
      ref={imgRef}
      width={300}
      height={300}
      stroke="blue"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};
export default Drawing;

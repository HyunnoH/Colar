import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { css } from "emotion";

const Drawing = ({ width, height, scrollPosition }) => {
  const [rect, setRect] = useState();

  const canvasStore = useSelector(state => state.CanvasStyle);
  const backgroundImgState = useSelector(state => state.ImageState);

  const ctx = useRef();
  const prev = useRef({ x: 0, y: 0 });
  const curr = useRef({ x: 0, y: 0 });
  const canvasRef = useRef();
  const isEntered = useRef(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    setRect(canvasRef.current.getBoundingClientRect());
  }, []);

  const handleMouseDown = e => {
    updatePosition(e);

    const { x, y } = curr.current;

    isDrawing.current = true;

    ctx.current.fillStyle = canvasStore.color;
    ctx.current.lineWidth = canvasStore.thickness;
    ctx.current.lineCap = "round";

    ctx.current.beginPath();
    if (canvasStore.penType === "eraser") {
      ctx.current.clearRect(x, y, 2, 2);
    } else {
      ctx.current.fillRect(x, y, 2, 2);
    }
    ctx.current.closePath();
  };

  const handleMouseMove = e => {
    if (!isDrawing.current) return;

    updatePosition(e);
    if (canvasStore.penType === "brush") {
      draw();
    } else if (canvasStore.penType === "eraser") {
      const { x, y } = curr.current;
      ctx.current.beginPath();
      ctx.current.clearRect(
        x - canvasStore.thickness / 2,
        y - canvasStore.thickness / 2,
        canvasStore.thickness,
        canvasStore.thickness
      );
      ctx.current.closePath();
    }
  };

  const draw = () => {
    ctx.current.beginPath();
    ctx.current.moveTo(prev.current.x, prev.current.y);
    ctx.current.lineTo(curr.current.x, curr.current.y);
    ctx.current.strokeStyle = canvasStore.color;
    ctx.current.lineWidth = canvasStore.thickness;
    ctx.current.stroke();
    ctx.current.closePath();
  };

  const handleMouseUp = e => {
    isDrawing.current = false;

    if (canvasStore.penType === "line") {
      updatePosition(e);
      draw();
    }
  };

  const updatePosition = e => {
    prev.current = curr.current;
    curr.current = {
      x: e.clientX - rect.left + scrollPosition.left,
      y: e.clientY - rect.top + scrollPosition.top
    };
  };

  const handleMouseEnter = () => {
    isEntered.current = true;
  };

  const handleMouseOut = () => {
    isEntered.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={canvasStyle}
      width={backgroundImgState.width}
      height={backgroundImgState.height}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    />
  );
};

const canvasStyle = css`
  position: absolute;
  overflow: hidden;
  z-index: 3;
`;

export default Drawing;

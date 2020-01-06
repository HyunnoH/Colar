import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { css } from "emotion";

const Drawing = ({ width, height }) => {
  const [rect, setRect] = useState();

  const canvasStore = useSelector(state => state.CanvasStyle);

  const ctx = useRef();
  const prev = useRef({ x: 0, y: 0 });
  const curr = useRef({ x: 0, y: 0 });
  const canvasRef = useRef();
  const isDrawing = useRef(false);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    setRect(canvasRef.current.getBoundingClientRect());
  }, []);

  const handleMouseDown = e => {
    const temp = document.getElementsByTagName("div")[2];
    console.log(temp.scrollLeft, temp.scrollTop);

    prev.current = curr.current;

    console.log(canvasRef.current.scrollLeft, canvasRef.current.scrollTop);
    curr.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const { x, y } = curr.current;

    isDrawing.current = true;

    ctx.current.fillStyle = canvasStore.color;
    ctx.current.lineWidth = canvasStore.thickness;
    ctx.current.lineCap = "round";

    ctx.current.beginPath();
    ctx.current.fillRect(x, y, 2, 2);
    ctx.current.closePath();
  };

  const handleMouseMove = e => {
    if (!isDrawing.current) return;

    prev.current = curr.current;
    curr.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    draw();
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

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={canvasStyle}
      width={width}
      height={height}
    />
  );
};

const canvasStyle = css`
  position: absolute;
  overflow: hidden;
`;

export default Drawing;

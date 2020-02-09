import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";
import { setCanvas, setContext } from "../../store/CanvasInfo";
import { updateLeft, updateTop } from "../../store/CanvasStyle";

const Drawing = ({ scrollPosition }) => {
  const [rect, setRect] = useState();

  const canvasStore = useSelector(state => state.CanvasStyle);
  const backgroundImgState = useSelector(state => state.ImageState);

  const ctx = useRef();
  const prev = useRef({ x: 0, y: 0 });
  const curr = useRef({ x: 0, y: 0 });
  const canvasRef = useRef();
  let timer;
  const isDrawing = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    setRect(canvasRef.current.getBoundingClientRect());
    dispatch(setContext(ctx.current));
    dispatch(setCanvas(canvasRef.current));
  }, [dispatch]);

  const handleMouseDown = e => {
    if (e.button) return;

    updatePosition(e);

    isDrawing.current = true;

    ctx.current.fillStyle = canvasStore.color;
    ctx.current.lineWidth = canvasStore.thickness;
    ctx.current.lineCap = "round";
    ctx.current.beginPath();

    ctx.current.globalCompositeOperation =
      canvasStore.penType === "eraser" ? "destination-out" : "source-over";

    updatePosition(e);
    draw();
    ctx.current.closePath();
  };

  const handleMouseMove = e => {
    e.persist();
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        // updatePosition(e);
        dispatch(updateLeft(e.clientX - rect.left + scrollPosition.left));
        dispatch(updateTop(e.clientY - rect.top + scrollPosition.top));
      }, 16);
    }
    if (!isDrawing.current || canvasStore.penType === "line") return;

    updatePosition(e);

    ctx.current.globalCompositeOperation =
      canvasStore.penType === "brush" ? "source-over" : "destionation-out";
    draw();
  };

  const handleMouseUp = e => {
    isDrawing.current = false;

    if (canvasStore.penType === "line") {
      // updatePosition(e);
      curr.current = {
        x: e.clientX - rect.left + scrollPosition.left,
        y: e.clientY - rect.top + scrollPosition.top
      };
      draw();
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

  const updatePosition = e => {
    prev.current = curr.current;
    curr.current = {
      x: e.clientX - rect.left + scrollPosition.left,
      y: e.clientY - rect.top + scrollPosition.top
    };
  };

  const handleMouseOut = () => {
    isDrawing.current = false;
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
      onMouseOut={handleMouseOut}
    />
  );
};

const canvasStyle = css`
  position: absolute;
  overflow: hidden;
  z-index: 3;
  cursor: none;
`;

export default Drawing;

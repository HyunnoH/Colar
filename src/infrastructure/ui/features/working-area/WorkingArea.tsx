import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useToolbarItem } from "../../../stores/modules/toolbar/hooks";

const WorkspaceBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100vh - 68px);
  ${(props) => {
    const backgroundColor = props.theme.canvasBackground;
    return css`
      background-color: ${backgroundColor};
    `;
  }}

  canvas {
    overflow-x: scroll;
    background-color: white;
  }
`;

const CanvasWrapper = styled.div`
  width: 60%;
  height: 60%;
`;

type Position2D = {
  x: number;
  y: number;
};

type Dimension2D = {
  width: number;
  height: number;
};

export default function WorkingArea() {
  const isDrawing = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousPos = useRef<Position2D>({
    x: 0,
    y: 0,
  });
  const currentPos = useRef<Position2D>({
    x: 0,
    y: 0,
  });
  const mod = useToolbarItem();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState<Partial<Dimension2D>>({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    setWrapperSize({
      width: wrapperRef.current?.clientWidth,
      height: wrapperRef.current?.clientHeight,
    });
  }, []);

  const changePosition = useCallback(
    (
      canvas: HTMLCanvasElement,
      e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
    ) => {
      previousPos.current = currentPos.current;
      currentPos.current = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop,
      };

      console.log(
        "mousemove:",
        "previouse:",
        previousPos.current,
        "current:",
        currentPos.current
      );
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !isDrawing.current || !ctx) {
        return;
      }

      changePosition(canvas, e);

      const fillStyle = "black";

      if (mod === "brush") {
        ctx.beginPath();
        ctx.moveTo(previousPos.current.x, previousPos.current.y);
        ctx.lineTo(currentPos.current.x, currentPos.current.y);
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = fillStyle;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      } else if (mod === "eraser") {
        ctx.beginPath();
        ctx.moveTo(previousPos.current.x, previousPos.current.y);
        ctx.lineTo(currentPos.current.x, currentPos.current.y);
        ctx.globalCompositeOperation = "destination-out";
        ctx.strokeStyle = fillStyle;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      }
    },
    [mod]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (e.button !== 0 || !canvas || !ctx) {
        return;
      }

      isDrawing.current = true;

      changePosition(canvas, e);

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(currentPos.current.x, currentPos.current.y, 2, 2);
      ctx.closePath();
    },
    []
  );

  return (
    <WorkspaceBackground>
      <CanvasWrapper ref={wrapperRef}>
        <canvas
          ref={canvasRef}
          width={wrapperSize.width}
          height={wrapperSize.height}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            isDrawing.current = false;
          }}
          onMouseDown={handleMouseDown}
        />
      </CanvasWrapper>
    </WorkspaceBackground>
  );
}

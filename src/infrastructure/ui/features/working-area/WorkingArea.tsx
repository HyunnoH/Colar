import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useColorState } from "../../../stores/modules/color";
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
  const { mod, brushSize } = useToolbarItem();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperSize, setWrapperSize] = useState<Partial<Dimension2D>>({
    width: 100,
    height: 100,
  });
  const { color } = useColorState();

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

      ctx.beginPath();

      if (mod === "brush") {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = color;
      } else if (mod === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
      }

      console.log(brushSize);

      ctx.arc(
        currentPos.current.x,
        currentPos.current.y,
        brushSize,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.closePath();
    },
    [mod, color, brushSize]
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
      ctx.fillStyle = color;
      ctx.fillRect(currentPos.current.x, currentPos.current.y, 2, 2);
      ctx.closePath();
    },
    [color, brushSize]
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

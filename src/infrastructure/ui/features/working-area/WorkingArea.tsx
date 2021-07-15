import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";

import { Position2D } from "../../../../core/position";
import { useColorState } from "../../../stores/modules/color";
import { useToolbarItem } from "../../../stores/modules/toolbar/hooks";
import { ToolbarMods } from "../../../stores/modules/toolbar/types";
import { useCanvasContext } from "../../hooks/useCanvasContext";

const WorkspaceBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100vh - 68px);
  overflow-x: auto;
  overflow-y: auto;
  ${(props) => {
    const backgroundColor = props.theme.canvasBackground;
    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

const CanvasWrapper = styled.div`
  canvas {
    background-color: white;
  }
`;

export default function WorkingArea() {
  const isDrawing = useRef(false);
  const previousPos = useRef<Position2D>({
    x: 0,
    y: 0,
  });
  const currentPos = useRef<Position2D>({
    x: 0,
    y: 0,
  });
  const { mod, brushSize } = useToolbarItem();

  const { color } = useColorState();
  const { ctx, canvas, ref } = useCanvasContext();

  const stroke = useCallback(
    ({
      ctx,
      isMouseDown = false,
      brushSize,
      mod,
    }: {
      ctx: CanvasRenderingContext2D;
      isMouseDown?: boolean;
      brushSize: number;
      mod: ToolbarMods;
    }) => {
      if (mod === "brush") {
        ctx.globalCompositeOperation = "source-over";
      } else if (mod === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
      }
      isMouseDown
        ? ctx.moveTo(currentPos.current.x, currentPos.current.y)
        : ctx.moveTo(previousPos.current.x, previousPos.current.y);
      ctx.lineTo(currentPos.current.x, currentPos.current.y);

      ctx.lineWidth = brushSize;
      ctx.stroke();
    },
    []
  );

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
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!isDrawing.current || !canvas || !ctx) {
        return;
      }

      changePosition(canvas, e);
      stroke({ ctx, brushSize, mod });
    },
    [stroke, canvas, ctx, brushSize, mod]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (e.button !== 0 || !canvas || !ctx) {
        return;
      }

      isDrawing.current = true;

      changePosition(canvas, e);

      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.strokeStyle = color;

      stroke({ ctx, isMouseDown: true, brushSize, mod });
    },
    [stroke, color, canvas, ctx, brushSize, mod]
  );

  return (
    <WorkspaceBackground>
      <CanvasWrapper>
        <canvas
          ref={ref}
          width={800}
          height={600}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            isDrawing.current = false;
            if (!ctx) {
              return;
            }
            ctx.closePath();
          }}
          onMouseDown={handleMouseDown}
        />
      </CanvasWrapper>
    </WorkspaceBackground>
  );
}

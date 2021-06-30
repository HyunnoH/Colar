import React, { useCallback, useRef } from "react";
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

  > canvas {
    width: 60%;
    height: 60%;
    overflow-x: scroll;
    background-color: white;
  }
`;

type Position2D = {
  x: number;
  y: number;
};

export default function WorkingArea() {
  const isDrawing = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mod = useToolbarItem();

  useEffect(() => {
    console.log(mod);
  }, [mod]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;

      if (!canvas || !isDrawing.current) {
        return;
      }

      const currentPosition: Position2D = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop,
      };

      const ctx = canvas.getContext("2d");

      ctx?.beginPath();
      ctx?.moveTo(currentPosition.x, currentPosition.y);
    },
    []
  );

  return (
    <WorkspaceBackground>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseUp={() => {
          isDrawing.current = false;
        }}
        onMouseDown={(e) => {
          if (e.button === 0) {
            isDrawing.current = true;
          }
        }}
      />
    </WorkspaceBackground>
  );
}

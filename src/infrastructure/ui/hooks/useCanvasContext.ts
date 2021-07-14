import { useCallback, useMemo } from "react";
import { useState } from "react";

export function useCanvasContext() {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const ref = useCallback((node: HTMLCanvasElement | null) => {
    if (node) {
      setCanvas(node);
      setCtx(node.getContext("2d"));
    }
  }, []);

  return {
    ctx,
    canvas,
    ref,
  };
}

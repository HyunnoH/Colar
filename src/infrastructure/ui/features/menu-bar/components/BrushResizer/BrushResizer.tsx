import { useEffect } from "react";
import { useState } from "react";
import {
  useToolbar,
  useToolbarItem,
} from "../../../../../stores/modules/toolbar/hooks";
import Input from "../../../../components/Input";

export default function BrushResizer() {
  const { changeBrushSize } = useToolbar();
  const { brushSize } = useToolbarItem();
  const [pixel, setPixel] = useState(brushSize.toString());

  useEffect(() => {
    setPixel(brushSize.toString());
  }, [brushSize]);

  return (
    <Input
      label="브러쉬 사이즈:"
      value={pixel}
      onChange={(e) => setPixel(e.target.value)}
      onKeyDown={(e) => {
        if (e.code !== "Enter") {
          return;
        }
        changeBrushSize(
          e.currentTarget.value ? parseFloat(e.currentTarget.value) : 0.0
        );
      }}
    />
  );
}

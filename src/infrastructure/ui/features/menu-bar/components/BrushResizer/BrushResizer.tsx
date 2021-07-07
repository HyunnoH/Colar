import { useEffect } from "react";
import {
  useToolbar,
  useToolbarItem,
} from "../../../../../stores/modules/toolbar/hooks";
import Input from "../../../../components/Input";

export default function BrushResizer() {
  const { changeBrushSize } = useToolbar();
  const { brushSize } = useToolbarItem();

  return (
    <Input.Slide
      min={1}
      max={96}
      value={brushSize}
      onChange={(e) => changeBrushSize(parseInt(e.target.value))}
      step={1}
    ></Input.Slide>
  );
}

import {
  useToolbar,
  useToolbarItem,
} from "../../../../../stores/modules/toolbar/hooks";
import Input from "../../../../components/Input";

export default function BrushResizer() {
  const { changeBrushSize } = useToolbar();
  const { brushSize } = useToolbarItem();

  return (
    <Input
      label="브러쉬 사이즈"
      value={brushSize}
      onChange={(e) => {
        if (e.target.value) changeBrushSize(parseInt(e.target.value));
      }}
      onBlur={(e) => {
        changeBrushSize(e.target.value ? parseInt(e.target.value) : 0);
      }}
    />
  );
}

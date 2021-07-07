import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./../../rootReducer";
import toolbarSlice from ".";
import { useCallback, useMemo } from "react";
import { ToolbarMods } from "./types";

export function useToolbarItem() {
  return useSelector(({ toolbar }: RootState) => toolbar);
}

export function useToolbar() {
  const dispatch = useDispatch();

  const changeMod = useCallback(
    (mod: ToolbarMods) => dispatch(toolbarSlice.actions.changeMode(mod)),
    [dispatch]
  );

  const changeBrushSize = useCallback(
    (size: number) => dispatch(toolbarSlice.actions.changeBrushSize(size)),
    [dispatch]
  );

  return useMemo(() => ({ changeMod, changeBrushSize }), [
    changeMod,
    changeBrushSize,
  ]);
}

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./../../rootReducer";
import toolbarSlice from ".";
import { useCallback, useMemo } from "react";
import { ToolbarMods } from "./types";

export function useToolbarItem() {
  return useSelector(({ toolbar }: RootState) => toolbar.mod);
}

export function useToolbar() {
  const dispatch = useDispatch();

  const changeMod = useCallback(
    (mod: ToolbarMods) => dispatch(toolbarSlice.actions.changeMode(mod)),
    [dispatch]
  );

  return useMemo(() => ({ changeMod }), [changeMod]);
}

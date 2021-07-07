import { Color } from "chroma-js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import colorSlice from ".";
import { useCallback } from "react";
import { useMemo } from "react";

export function useColorState() {
  return useSelector(({ color }: RootState) => color);
}

export function useColor() {
  const dispatch = useDispatch();

  const changeColor = useCallback(
    (color: Color) =>
      dispatch(colorSlice.actions.changeColor(color.hex("rgb"))),
    [dispatch]
  );

  return useMemo(
    () => ({
      changeColor,
    }),
    [changeColor]
  );
}

import React, { useRef, useState } from "react";
import styled from "styled-components";
import chroma, { Color } from "chroma-js";
import { useCallback } from "react";

import { useColorPickerReducer } from "./hooks/reducers";
import { useEffect } from "react";

interface ColorPickerProps {
  onColorChange?: (color: Color) => void;
}

const HueSpectrumBar = styled.div`
  width: 300px;
  height: 3rem;
  background: linear-gradient(
    to right,
    #ff0000 0%,
    #ffff00 16%,
    #00ff00 33%,
    #00ffff 50%,
    #0000ff 66%,
    #ff00ff 82%,
    #ff0000 100%
  );
  margin-bottom: 20px;
`;

const Background = styled.div`
  height: 200px;
  position: relative;
`;

const SaturationLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #fff0 0%, #ffff 100%);
`;

const BrightnessLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #0000 0%, #000f 100%);
`;

export default function ColorPicker({ onColorChange }: ColorPickerProps) {
  const [state, dispatch] = useColorPickerReducer();

  useEffect(() => {
    const { h, s, v } = state;
    if (onColorChange) {
      onColorChange(chroma.hsv(h, s, v));
    }
  }, [state, onColorChange]);

  const isClicked = useRef(false);

  const computeHue = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const h = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 360;
      dispatch({
        type: "h",
        h: h,
      });
    },
    [dispatch]
  );

  const handleHueDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      isClicked.current = true;
      computeHue(e);
    },
    [computeHue]
  );

  const handleHueMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isClicked.current) return;
      computeHue(e);
    },
    [computeHue]
  );

  const computeHSV = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const s = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
      const v = 1 - e.nativeEvent.offsetY / e.currentTarget.offsetHeight;

      dispatch({
        type: "sv",
        s,
        v,
      });
    },
    [state, dispatch]
  );

  const handleBackgroundMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      isClicked.current = true;
      computeHSV(e);
    },
    [computeHSV, onColorChange]
  );

  const handleBackgroundMouseUp = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      isClicked.current = false;
      computeHSV(e);
    },
    [computeHSV, onColorChange]
  );

  return (
    <div>
      <HueSpectrumBar
        onMouseDown={handleHueDown}
        onMouseMove={handleHueMove}
        onMouseUp={() => {
          isClicked.current = false;
        }}
        onMouseLeave={(e) => {
          if (isClicked.current) {
            isClicked.current = false;
            computeHue(e);
          }
        }}
      />
      <Background
        style={{
          backgroundColor: chroma.hsv(state.h, 1, 1).hex(),
        }}
        onMouseDown={handleBackgroundMouseDown}
        onMouseUp={handleBackgroundMouseUp}
      >
        <SaturationLayer />
        <BrightnessLayer />
      </Background>
    </div>
  );
}

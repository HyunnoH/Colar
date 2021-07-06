import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";
import { useCallback } from "react";

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

export default function ColorPicker() {
  const [hue, setHue] = useState("#ff0000");
  const isClicked = useRef(false);

  const computeHue = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const h = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 360;
      setHue(chroma.hsl(h, 1, 0.5).hex());
    },
    []
  );

  const handleHueDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      isClicked.current = true;
      computeHue(e);
    },
    []
  );

  const handleHueMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isClicked.current) return;
      computeHue(e);
    },
    []
  );

  return (
    <div>
      <HueSpectrumBar
        onMouseDown={handleHueDown}
        onMouseMove={handleHueMove}
        onMouseUp={() => {
          isClicked.current = false;
        }}
      />
      <Background
        style={{
          backgroundColor: hue,
        }}
        onMouseDown={(e) => {
          isClicked.current = true;
          console.log(e.currentTarget.offsetWidth);

          console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }}
        onMouseMove={(e) => {
          if (!isClicked.current) {
            return;
          }
          console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }}
        onMouseUp={(e) => {
          isClicked.current = false;
        }}
      >
        <SaturationLayer />
        <BrightnessLayer />
      </Background>
    </div>
  );
}

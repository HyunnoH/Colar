import { useRef } from "react";
import styled, { css } from "styled-components";

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

const Background = styled.div<{ backgroundColor: string }>`
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `}

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
  return (
    <div>
      <HueSpectrumBar />
      <Background backgroundColor={"#ff0000"}>
        <SaturationLayer>
          <BrightnessLayer />
        </SaturationLayer>
      </Background>
    </div>
  );
}

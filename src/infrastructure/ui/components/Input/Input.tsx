import styled, { css } from "styled-components";

import InputSlide from "./InputSlide";
import { InputProps } from "./types";

const StyledInput = styled.input`
  border-color: #474747;
  border-style: solid;

  ${(props) => {
    const { inputBackground } = props.theme;

    return css`
      background-color: ${inputBackground};
    `;
  }};
`;

const Wrapper = styled.div`
  display: inline-block;
  margin: 4px;

  > span {
    margin-right: 6px;
  }
`;

export default function Input({ label, ...restProps }: InputProps) {
  return (
    <Wrapper>
      <span>{label}</span>
      <StyledInput {...restProps} />
    </Wrapper>
  );
}

Input.Slide = InputSlide;

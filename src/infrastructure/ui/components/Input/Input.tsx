import styled from "styled-components";

import InputSlide from "./InputSlide";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export default function Input({ label, ...restProps }: InputProps) {
  return (
    <div>
      <span>{label}</span>
      <StyledInput {...restProps} />
    </div>
  );
}

Input.Slide = InputSlide;

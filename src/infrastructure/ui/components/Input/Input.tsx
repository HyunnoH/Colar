import styled from "styled-components";

import InputSlide from "./InputSlide";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export default function Input({ children, ...restProps }: InputProps) {
  return <StyledInput {...restProps}>{children}</StyledInput>;
}

Input.Slide = InputSlide;

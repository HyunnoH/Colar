import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export default function InputSlide({ children, ...restProps }: InputProps) {
  return (
    <StyledInput type="range" {...restProps}>
      {children}
    </StyledInput>
  );
}

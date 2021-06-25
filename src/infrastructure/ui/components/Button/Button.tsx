import { forwardRef } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  ${(props) => {
    return css`
      padding: 8px 16px;
      border: none;
      color: ${props.theme.textColor};
      background-color: ${props.theme.mainBackground};
    `;
  }}
`;

function Button({ children, selected, ...restProps }: ButtonProps) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;

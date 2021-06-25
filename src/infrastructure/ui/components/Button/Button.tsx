import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  selected?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  margin: 4px;
  ${(props) => {
    const { active, theme } = props;
    const { alpha, textColor, baseColor } = theme;

    return css`
      padding: 2px 5px 3px 5px;
      border: none;
      color: ${textColor};
      background-color: ${active ? `rgba(0, 0, 0, ${alpha})` : baseColor};
    `;
  }}
`;

function Button({ children, selected, ...restProps }: ButtonProps) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;

import { MouseEvent } from "react";
import { MouseEventHandler, useCallback, useState } from "react";
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

function Button({
  active,
  children,
  selected,
  onMouseOver,
  onMouseOut,
  ...restProps
}: ButtonProps) {
  const [hoverActive, setHoverActive] = useState(false);

  const handleMouseOver = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      setHoverActive(true);
      if (onMouseOver) {
        onMouseOver(e);
      }
    },
    [onMouseOver]
  );

  const handleMouseOut = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      setHoverActive(false);
      if (onMouseOut) {
        onMouseOut(e);
      }
    },
    [onMouseOut]
  );

  return (
    <StyledButton
      active={active ?? hoverActive}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

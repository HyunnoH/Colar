import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface MenuProps {
  children: ReactNode;
}

const MenuWrapper = styled.nav`
  ${(props) => {
    return css`
      background-color: ${props.theme.baseColor};
      border: 1px solid ${props.theme.darkBorder};
    `;
  }}
`;

export default function Menu({ children }: MenuProps) {
  return (
    <MenuWrapper>
      <ul>{children}</ul>
    </MenuWrapper>
  );
}

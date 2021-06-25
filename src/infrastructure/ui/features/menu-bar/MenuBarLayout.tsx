import { ReactNode } from "react";
import styled, { css } from "styled-components";

const Frame = styled.div`
  height: 100vh;
`;

const MenuBar = styled.div`
  height: 40px;
  ${(props) => {
    return css`
      background-color: ${props.theme.mainBackground};
      border-bottom: 2px solid ${props.theme.borderColor};
    `;
  }}
`;

interface MenuBarLayoutProps {
  children: ReactNode;
}

export default function MenuBarLayout({ children }: MenuBarLayoutProps) {
  return (
    <Frame>
      <MenuBar></MenuBar>
      <MenuBar></MenuBar>
      {children}
    </Frame>
  );
}

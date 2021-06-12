import { ReactNode } from "react";
import styled from "styled-components";

const Frame = styled.div`
  height: 100vh;
  background-color: darkgray;
`;

const MenuBar = styled.div`
  height: 48px;
  background-color: gray;
`;

interface MenuBarLayoutProps {
  children: ReactNode;
}

export default function MenuBarLayout({ children }: MenuBarLayoutProps) {
  return (
    <Frame>
      <MenuBar></MenuBar>
      {children}
    </Frame>
  );
}

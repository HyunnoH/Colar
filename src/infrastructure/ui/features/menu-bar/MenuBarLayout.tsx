import { ReactNode } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
// import Dropdown from "../../components/Dropdown";
// import Menu from "../../components/Menu";

const Frame = styled.div`
  height: 100vh;
`;

const MenuBar = styled.div`
  height: 32px;
  ${(props) => {
    return css`
      background-color: ${props.theme.baseColor};
      border-bottom: 2px solid ${props.theme.darkBorder};
    `;
  }}

  > span {
    line-height: 28px;
    vertical-align: middle;
  }
`;

interface MenuBarLayoutProps {
  children: ReactNode;
}

export default function MenuBarLayout({ children }: MenuBarLayoutProps) {
  return (
    <Frame>
      <MenuBar>
        <span>
          <Button>File</Button>
          <Button>File</Button>
          <Button>File</Button>
          <Button>File</Button>
          <Button>File</Button>
        </span>
      </MenuBar>
      <MenuBar></MenuBar>
      {children}
    </Frame>
  );
}

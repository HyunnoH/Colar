import { ReactNode } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Menu from "../../components/Menu";

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
      <MenuBar>
        <Dropdown
          menu={
            <Menu>
              <div></div>
            </Menu>
          }
          trigger="click"
        >
          <Button>File</Button>
        </Dropdown>
      </MenuBar>
      <MenuBar></MenuBar>
      {children}
    </Frame>
  );
}

import { ReactNode } from "react";
import styled, { css } from "styled-components";

import Button from "../../components/Button";
import { FaPaintBrush } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => {
    return css`
      color: ${props.theme.textColor};
    `;
  }}
`;

const Toolbar = styled.div`
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;

  > button > svg {
    font-size: 20px;
  }

  ${(props) => {
    return css`
      background-color: ${props.theme.baseColor};
    `;
  }}
`;

interface ToolBarLayoutProps {
  children: ReactNode;
}

export default function ToolBarLayout({ children }: ToolBarLayoutProps) {
  return (
    <Wrapper>
      <Toolbar>
        <Button>
          <FaPaintBrush />
        </Button>
      </Toolbar>
      {children}
    </Wrapper>
  );
}

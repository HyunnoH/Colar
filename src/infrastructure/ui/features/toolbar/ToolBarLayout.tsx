import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { FaEraser, FaPaintBrush } from "react-icons/fa";

import Button from "../../components/Button";

import {
  useToolbar,
  useToolbarItem,
} from "../../../stores/modules/toolbar/hooks";

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

  > button {
    padding: 5px 5px 2px 5px;
    > svg {
      font-size: 18px;
    }
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
  const mod = useToolbarItem();
  const { changeMod } = useToolbar();

  return (
    <Wrapper>
      <Toolbar>
        <Button
          active={mod === "brush" ? true : undefined}
          onClick={() => changeMod("brush")}
        >
          <FaPaintBrush />
        </Button>
        <Button
          active={mod === "eraser" ? true : undefined}
          onClick={() => changeMod("eraser")}
        >
          <FaEraser />
        </Button>
      </Toolbar>
      {children}
    </Wrapper>
  );
}

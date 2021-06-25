import { ReactNode } from "react";
import styled from "styled-components";

const Frame = styled.div``;

interface ToolBarLayoutProps {
  children: ReactNode;
}

export default function ToolBarLayout({ children }: ToolBarLayoutProps) {
  return (
    <>
      <Frame></Frame>
      {children}
    </>
  );
}

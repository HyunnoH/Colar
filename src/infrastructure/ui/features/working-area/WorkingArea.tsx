import styled, { css } from "styled-components";

const WorkspaceBackground = styled.div`
  height: calc(100vh - 48px);
  ${(props) => {
    const backgroundColor = props.theme.canvasBackground;
    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export default function WorkingArea() {
  return <WorkspaceBackground />;
}

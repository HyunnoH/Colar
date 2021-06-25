import styled, { css } from "styled-components";

const WorkspaceBackground = styled.div`
  flex: 1;
  height: calc(100vh - 68px);
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

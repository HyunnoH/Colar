import styled, { css } from "styled-components";

const WorkspaceBackground = styled.div`
  height: 100%;
  ${(props) => {
    const backgroundColor = props.theme.background;
    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export default function WorkingArea() {
  return <WorkspaceBackground />;
}

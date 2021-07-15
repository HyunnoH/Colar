import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
  }
`;

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const themeDecorator = (Story: () => JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

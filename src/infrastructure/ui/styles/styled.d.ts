import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    workspaceBackground: string;
    mainBackground: string;
    borderColor: string;
  }
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    baseColor: string;
    canvasBackground: string;
    inputBackground: string;
    pannelBackground: string;
    lightBorder: string;
    darkBorder: string;
    textColor: string;
    alpha: string;
  }
}

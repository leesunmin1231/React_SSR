import '@emotion/react'; // it's important to use ThemeProvider

type styleColors = {
  PRIMARY: string;
  PRIMARY_DARK: string;
  PRIMARY_LIGHT: string;
  OFF_WHITE: string;
  WHITE: string;
  BLACK: string;
  GRAY1: string;
  GRAY2: string;
  GRAY3: string;
  GRAY4: string;
  GRAY5: string;
  RED: string;
  LIGHT_BLACK: string;
  POINT_COLOR: string;
  BACKGROUND: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: styleColors;
  }
}

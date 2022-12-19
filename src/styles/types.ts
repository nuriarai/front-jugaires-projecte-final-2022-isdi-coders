import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        base: string;
        light: string;
      };
      contrast: {
        base: string;
        lighter: string;
      };
      muted: string;
      success: {
        base: string;
      };
      error: {
        base: string;
      };
      alert: {
        base: string;
      };
      info: {
        base: string;
      };
    };
    fontSizes: {
      header: string;
      headerMobile: string;
      big: string;
      normal: string;
      small: string;
    };
    borderRadius: string;
    mediaSizes: {
      minimum: string;
      small: string;
      medium: string;
      big: string;
    };
    sizes: {
      paddingSmall: string;
      paddingBig: string;
    };
    buttonsSizes: {
      big: string;
      medium: string;
      small: string;
    };
  }
}

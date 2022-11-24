import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        base: string;
      };
      contrast: {
        base: string;
        ligthter: string;
        ligthtest: string;
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
      big: string;
      normal: string;
      small: string;
    };
    borderRadius: string;
    mediaSizes: {
      small: string;
      medium: string;
      big: string;
    };
    sizes: {
      paddingSmall: string;
      paddingBig: string;
    };
  }
}

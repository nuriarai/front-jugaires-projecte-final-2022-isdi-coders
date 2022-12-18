import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      dark: "#180d3c",
      base: "#413267",
      light: "#fdf1dd",
    },
    contrast: {
      base: "#fcbc1d",
      lighter: "#f9d18d",
    },
    muted: "#bbb",
    success: {
      base: "#16bc6c",
    },
    error: {
      base: "#bc3416",
    },
    alert: {
      base: "#dcc91c",
    },
    info: {
      base: "#1694BC",
    },
  },
  fontSizes: {
    header: "4.375rem",
    headerMobile: "3.75rem",
    big: "1.25rem",
    normal: "1.125rem",
    small: "1rem",
  },
  borderRadius: "22px",
  mediaSizes: {
    small: "550px",
    medium: "800px",
    big: "1280px",
  },
  sizes: {
    paddingSmall: "20px",
    paddingBig: "40px",
  },
  buttonsSizes: {
    big: "335px",
    medium: "220px",
    small: "133px",
  },
};

export default mainTheme;

import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      dark: "#180d3c",
      base: "#413267",
    },
    contrast: {
      base: "#fcbc1d",
      ligthter: "#f9d18d",
      ligthtest: "#fdf1dd",
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
    header: "5rem",
    big: "1.25rem",
    normal: "1.125rem",
    small: "1rem",
  },
  borderRadius: "22px",
  mediaSizes: {
    small: "550px",
    medium: "850px",
    big: "1280px",
  },
  sizes: {
    paddingSmall: "20px",
    paddingBig: "40px",
  },
};

export default mainTheme;

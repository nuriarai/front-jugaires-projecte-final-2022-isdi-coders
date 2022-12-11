import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*:where(:not(html, iframe, select, input, canvas, img, svg, video, audio, h1, h2, h3, h4, h5, p):not(svg *, symbol *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a, button {
  cursor: pointer;
}


ol, ul, menu {
  list-style: none;
  margin: 0;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

input, textarea {
  -webkit-user-select: auto;
}


textarea {
  white-space: revert;
}

meter {
  -webkit-appearance: revert;
  appearance: revert;
}

::placeholder {
  color: unset;
}

:where([hidden]) {
  display: none;
}

:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

::after {
  -webkit-user-drag: element;
}

button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

body {
  background-color: ${(props) => props.theme.colors.primary.dark};
}

body, input, textarea, select {
  font-family: "Open Sans", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.normal};
  color: ${(props) => props.theme.colors.primary.dark};
}



`;

export default GlobalStyles;

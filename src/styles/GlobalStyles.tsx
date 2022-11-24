import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";
import "@fontsource/oranienbaum";

const GlobalStyles = createGlobalStyle`

*:where(:not(html, iframe, canvas, img, svg, video, audio, h1, h2, h3, h4, h5, p):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reapply the pointer cursor for anchor tags */
a, button {
    cursor: pointer;
}

/* Remove list styles (bullets/numbers) */
ol, ul, menu {
    list-style: none;
    margin: 0;
}

/* For images to not be able to exceed their container */
img {
    max-width: 100%;
}

/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
input, textarea {
    -webkit-user-select: auto;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}

/* minimum style to allow to style meter element */
meter {
    -webkit-appearance: revert;
    appearance: revert;
}

/* reset default text opacity of input placeholder */
::placeholder {
    color: unset;
}

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
:where([hidden]) {
    display: none;
}

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
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

body, input, textarea {
  font-family: "Open Sans", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
}
 h1 {
  font-family: "Oranienbaum", "Cambria", "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
 }

`;

export default GlobalStyles;

import { css } from "styled-components";

/* styles .button--button */

const buttonButtonStyles = css`
  width: 100%;
  max-width: ${(props) => props.theme.buttonsSizes.big};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.primary.light};
  height: 55px;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.big};
  &:hover,
  &:focus,
  &.button--reversed {
    background-color: ${(props) => props.theme.colors.contrast.base};
    color: ${(props) => props.theme.colors.primary.dark};
  }
  &.button--reversed {
    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.primary.dark};
      color: ${(props) => props.theme.colors.primary.light};
    }
  }
`;

export const buttonIconCardCircle = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary.light};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primary.light};
  }
`;

export default buttonButtonStyles;

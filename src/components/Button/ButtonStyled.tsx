import styled, { css } from "styled-components";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

interface StyledButtonProps {
  semantic: "button" | "icon";
}

const ButtonStyled = styled.button<StyledButtonProps>`
  ${(props) => props.semantic === "button" && buttonStyle};
  ${(props) => props.semantic === "icon" && iconStyle};
`;

const iconStyle = css`
  border-radius: 50%;
  background-image: url(${CloseIcon});
  background-color: ${(props) => props.theme.colors.contrast.base};
  background-repeat: no-repeat;
  background-position: center;
  width: 42px;
  height: 42px;
`;

const buttonStyle = css`
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

export default ButtonStyled;

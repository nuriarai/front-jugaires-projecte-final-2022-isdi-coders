import styled from "styled-components";
import CloseIcon from "../../assets/icons/CloseIcon.svg";
import buttonButtonStyles from "../../styles/buttonStyles";

const ButtonStyled = styled.button`
  &.button--icon {
    border-radius: 50%;
    background-image: url(${CloseIcon});
    background-color: ${(props) => props.theme.colors.contrast.base};
    background-repeat: no-repeat;
    background-position: center;
    width: 42px;
    height: 42px;
  }
  &.button--button {
    ${buttonButtonStyles};
  }
`;

export default ButtonStyled;

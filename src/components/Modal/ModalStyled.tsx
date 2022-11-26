import styled from "styled-components";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

const ModalStyled = styled.div`
  width: 50%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.primary.light};
  border: 2px solid ${(props) => props.theme.colors.error.base};
  border-top-width: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  p {
    font-size: ${(props) => props.theme.fontSizes.big};
    font-weight: bold;
  }
  .button__icon {
    position: absolute;
    top: -23px;
    right: -23px;
    border-radius: 50%;
    background-image: url(${CloseIcon});
    background-color: ${(props) => props.theme.colors.contrast.base};
    background-repeat: no-repeat;
    background-position: center;
    width: 42px;
    height: 42px;
  }
`;

export default ModalStyled;

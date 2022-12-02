import styled from "styled-components";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(115, 119, 196, 0.7);

  .modal {
    position: absolute;
    width: 80%;
    min-height: 200px;
    padding: 20px;
    max-width: 600px;
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
      width: 50%;
    }

    &.modal--error {
      border: 2px solid ${(props) => props.theme.colors.error.base};
      border-top-width: 30px;
      .button--icon {
        border: 2px solid ${(props) => props.theme.colors.error.base};
      }
    }
    &.modal--success {
      border: 2px solid ${(props) => props.theme.colors.success.base};
      border-top-width: 30px;
      .button--icon {
        border: 2px solid ${(props) => props.theme.colors.success.base};
      }
    }
    &.modal--info {
      border: 2px solid ${(props) => props.theme.colors.info.base};
      border-top-width: 30px;
      .button--icon {
        border: 2px solid ${(props) => props.theme.colors.info.base};
      }
    }
    &.modal--alert {
      border: 2px solid ${(props) => props.theme.colors.alert.base};
      border-top-width: 30px;
      .button--icon {
        border: 2px solid ${(props) => props.theme.colors.alert.base};
      }
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.big};
      font-weight: bold;
      text-align: center;
    }
    .button--icon {
      position: absolute;
      top: -42px;
      right: -25px;
      border-radius: 50%;
      background-image: url(${CloseIcon});
      background-color: ${(props) => props.theme.colors.contrast.base};
      background-repeat: no-repeat;
      background-position: center;
      width: 52px;
      height: 52px;
    }
  }
`;

export default ModalStyled;

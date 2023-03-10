import styled from "styled-components";
import bkDate from "../../assets/images/bk_date.svg";
import buttonButtonStyles, {
  buttonIconCardCircle,
} from "../../styles/buttonStyles";

const GameCardStyled = styled.article`
  width: 100%;
  max-width: 335px;
  position: relative;
  span {
    margin-bottom: 5px;
  }
  .game__title {
    text-transform: capitalize;
    margin-bottom: 10px;
    margin-top: -20px;
  }
  span {
    display: block;
  }
  .game__image img {
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    object-fit: cover;
  }
  .game__separator {
    height: 45px;
    margin-top: -50px;
    svg {
      width: 100%;
    }
  }
  .game__date {
    display: block;
    height: 35px;
    background: url(${bkDate}) no-repeat center center;
    color: ${(props) => props.theme.colors.primary.light};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .game__content {
    padding: 0 15px 15px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.contrast.base};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  }
  .game__location {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.big};
  }
  .game__address {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
  .game__icons {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: -10px;
    svg {
      font-size: 2.5rem;
    }
  }
  .button--button {
    ${buttonButtonStyles};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.primary.base};
    }
  }
  .button--icon-card.circle {
    ${buttonIconCardCircle};
    top: 15px;
    right: 15px;
    height: 40px;
    width: 40px;
    svg {
      font-size: 2.5rem;
    }
  }
`;

export default GameCardStyled;

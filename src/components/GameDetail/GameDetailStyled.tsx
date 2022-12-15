import styled from "styled-components";
import buttonButtonStyles, {
  buttonIconCardCircle,
} from "../../styles/buttonStyles";
import bkDate from "../../assets/images/bk_date_white.svg";

const GameDetailStyled = styled.article`
  position: relative;

  .game-detail__image img {
    display: block;
    margin: 0 auto 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    display: block;
  }

  .page__title {
    margin-bottom: 15px;
  }

  .page__title-pre {
    color: ${(props) => props.theme.colors.primary.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    text-align: center;
  }

  .game-detail__date {
    font-size: ${(props) => props.theme.fontSizes.big};
    font-weight: 700;
    display: block;
    height: 35px;
    background: url(${bkDate}) no-repeat center center;
    color: ${(props) => props.theme.colors.primary.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .game-detail__content {
    position: relative;
    margin-top: 30px;
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => props.theme.sizes.paddingSmall};
  }

  .game-detail__wrap-data {
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.contrast.base};
    margin-bottom: 10px;
    &:last-of-type {
      border-bottom: none;
    }
  }

  .game-detail__label {
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 5px;
  }

  .button--button {
    ${buttonButtonStyles};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .game-detail__icons {
    position: relative;
    height: 90px;
    margin-bottom: 20px;
  }
  .button--icon-card.circle {
    ${buttonIconCardCircle};
    bottom: 15px;
    right: 15px;
    height: 50px;
    width: 50px;
    background-color: ${(props) => props.theme.colors.contrast.lighter};
    svg {
      font-size: 2rem;
    }
  }
  .button--remove {
    left: 0;
  }
`;

export default GameDetailStyled;

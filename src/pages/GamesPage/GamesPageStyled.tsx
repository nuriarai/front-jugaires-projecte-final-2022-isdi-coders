import styled from "styled-components";
import caretImage from "../../assets/icons/caret-down.svg";

const GamesPageStyled = styled.div`
  .games__filter {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .filter {
    &__label {
      display: block;
      color: ${(props) => props.theme.colors.primary.light};
    }
    &__select {
      max-width: 350px;
      -webkit-appearance: none;
      appearance: none;
      background: url(${caretImage}) no-repeat 96%,
        linear-gradient(
          90deg,
          ${(props) => props.theme.colors.primary.light} 88%,
          ${(props) => props.theme.colors.primary.light} 88%,
          ${(props) => props.theme.colors.contrast.base} 88%
        );
    }
  }
  @media (min-width: ${(props) => props.theme.mediaSizes.small}) {
    .games__filter {
      justify-content: flex-start;
      gap: 30px;
    }
  }
`;

export default GamesPageStyled;

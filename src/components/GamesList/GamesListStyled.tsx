import styled from "styled-components";

const GamesListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: 1, 335px;
  grid-auto-rows: 1fr;
  row-gap: 30px;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    grid-template-columns: repeat(2, 335px);
    justify-content: space-between;
  }
  @media (min-width: ${(props) => props.theme.mediaSizes.big}) {
    grid-template-columns: repeat(3, 335px);
  }
`;
export default GamesListStyled;

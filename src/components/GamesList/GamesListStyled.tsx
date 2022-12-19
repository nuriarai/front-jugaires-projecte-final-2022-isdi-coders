import styled from "styled-components";

const GamesListStyled = styled.ul`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: 1, 335px;
  row-gap: 30px;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    grid-template-columns: repeat(auto-fill, 335px);
    column-gap: 15px;
    grid-auto-rows: 1fr;
    justify-content: space-between;
  }
  @media (min-width: ${(props) => props.theme.mediaSizes.big}) {
  }
`;
export default GamesListStyled;

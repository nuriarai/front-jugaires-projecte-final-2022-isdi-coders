import styled from "styled-components";

const LayoutStyled = styled.div`
  overflow-x: hidden;
  .page__title {
    font-family: "Oranienbaum", "Cambria", "Hoefler Text", Utopia,
      "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman",
      serif;
    font-size: ${(props) => props.theme.fontSizes.headerMobile};
    color: ${(props) => props.theme.colors.primary.light};
    text-align: center;
    margin: 0 0 30px;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    .page__title {
      font-size: ${(props) => props.theme.fontSizes.header};
      margin: 15px 0 50px;
    }
  }

  a,
  a:visited {
    color: ${(props) => props.theme.colors.contrast.base};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.primary.light};
      text-decoration: underline;
    }
  }

  .container {
    padding: 20px 30px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default LayoutStyled;

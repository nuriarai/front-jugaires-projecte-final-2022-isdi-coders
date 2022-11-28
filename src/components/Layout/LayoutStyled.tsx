import styled from "styled-components";

const LayoutStyled = styled.div`
  padding: 20px;
  .page__title {
    font-family: "Oranienbaum", "Cambria", "Hoefler Text", Utopia,
      "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman",
      serif;
    font-size: ${(props) => props.theme.fontSizes.headerMobile};
    color: ${(props) => props.theme.colors.primary.light};
    text-align: center;
    margin: 30px 0 60px;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    .page__title {
      font-size: ${(props) => props.theme.fontSizes.header};
      margin-bottom: 70px;
    }
  }

  a,
  a:visited {
    color: ${(props) => props.theme.colors.contrast.base};
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.primary.light};
      text-decoration: underline;
    }
  }
`;

export default LayoutStyled;

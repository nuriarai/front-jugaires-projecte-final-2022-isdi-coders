import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border-radius: ${(props) => props.theme.borderRadius};

  .page__404 {
    font-size: 9rem;
    margin: 40px 0;
  }
  .content {
    color: ${(props) => props.theme.colors.primary.light};
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.big};
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.minimum}) {
    padding: ${(props) => props.theme.sizes.paddingBig} 20px;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    .page__404 {
      font-size: 12rem;
      margin: 80px 0;
    }
  }
`;

export default NotFoundPageStyled;

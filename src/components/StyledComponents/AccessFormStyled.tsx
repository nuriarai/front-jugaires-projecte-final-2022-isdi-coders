import styled from "styled-components";

const AccessFormStyled = styled.div`
  form {
    width: 100%;
    max-width: 335px;
    margin: 0 auto;
    padding: ${(props) => props.theme.sizes.paddingBig}
      ${(props) => props.theme.sizes.paddingSmall};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary.base};
  }

  .access__image--login {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    display: flex;
    justify-content: center;
    gap: 50px;
    form {
      max-width: 375px;
      padding: ${(props) => props.theme.sizes.paddingBig}
        ${(props) => props.theme.sizes.paddingBig};
      margin: 0;
    }
    .access__image--login {
      display: inline-block;
      width: 300px;
    }
  }

  .access__link-text {
    color: ${(props) => props.theme.colors.primary.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    margin-top: 15px;
    text-align: center;
  }

  .access__link {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  button {
    margin-top: 25px;
  }
`;

export default AccessFormStyled;

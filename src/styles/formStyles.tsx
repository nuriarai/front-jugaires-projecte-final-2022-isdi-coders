import styled from "styled-components";

const AllFormsStyled = styled.div`
  form {
    width: 100%;
    max-width: 335px;
    margin: 0 auto;
  }
  input,
  textarea,
  select {
    width: 100%;
    height: 55px;
    padding: 14px 20px;
    color: ${(props) => props.theme.colors.primary.dark};
    background-color: ${(props) => props.theme.colors.primary.light};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.6);
    &:focus {
      color: ${(props) => props.theme.colors.primary.dark};
      background-color: ${(props) => props.theme.colors.contrast.base};
    }
    &:focus-visible {
      outline: none;
    }
  }

  textarea {
    height: 130px;
  }

  .access__image--login {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.minimum}) {
    padding: ${(props) => props.theme.sizes.paddingBig} 20px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary.base};
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
    display: flex;
    justify-content: center;
    gap: 50px;

    form {
      max-width: 375px;
      padding: ${(props) => props.theme.sizes.paddingBig} 20px;
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
  .form__wrap-element {
    margin-bottom: 25px;
  }

  .form__select {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    color: ${(props) => props.theme.colors.primary.dark};
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.6);
  }

  .form__label {
    display: block;
    color: ${(props) => props.theme.colors.primary.light};
    margin-bottom: 12px;
  }

  :focus-visible {
    outline: none;
    outline-offset: none;
  }
  a.access__link {
    text-decoration: underline;
  }
`;

export default AllFormsStyled;

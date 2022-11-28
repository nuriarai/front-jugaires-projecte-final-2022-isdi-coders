import styled from "styled-components";

const RegisterFormStyled = styled.form`
  width: 100%;
  max-width: 335px;
  margin: 0 auto;
  padding: ${(props) => props.theme.sizes.paddingBig}
    ${(props) => props.theme.sizes.paddingSmall};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary.base};
  .access__link-text {
    color: ${(props) => props.theme.colors.primary.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    margin-top: 15px;
  }

  button {
    margin-top: 10px;
  }

  @media screen and (min-width: ${(props) => props.theme.mediaSizes.medium}) {
  }
`;

export default RegisterFormStyled;
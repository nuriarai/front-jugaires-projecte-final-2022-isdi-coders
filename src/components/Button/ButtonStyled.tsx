import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100%;
  max-width: ${(props) => props.theme.buttonsSizes.big};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary.dark};
  color: ${(props) => props.theme.colors.primary.light};
  height: 55px;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.big};
  &:hover,
  &:focus,
  .button--reversed {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

export default ButtonStyled;

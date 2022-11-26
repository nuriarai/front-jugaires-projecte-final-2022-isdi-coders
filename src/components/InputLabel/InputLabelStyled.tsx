import styled from "styled-components";

const InputLabelStyled = styled.div`
  label {
    display: block;
    color: ${(props) => props.theme.colors.primary.light};
    margin-bottom: 15px;
  }
  input {
    ::placeholder: ${(props) => props.theme.colors.muted};
    height: 55px;
    padding: 0 20px;
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

export default InputLabelStyled;

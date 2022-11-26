import styled from "styled-components";

const InputLabelStyled = styled.div`
  label {
    display: block;
    color: ${(props) => props.theme.colors.primary.light};
    margin-bottom: 15px;
  }
  input {
    height: 55px;
    padding: 0 20px;
    color: ${(props) => props.theme.colors.primary.dark};
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    ::placeholder: ${(props) => props.theme.colors.muted};
  }
`;

export default InputLabelStyled;

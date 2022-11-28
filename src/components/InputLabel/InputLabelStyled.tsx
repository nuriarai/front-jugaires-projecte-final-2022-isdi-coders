import styled from "styled-components";

const InputLabelStyled = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    color: ${(props) => props.theme.colors.primary.light};
    margin-bottom: 12px;
  }

  input {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    color: ${(props) => props.theme.colors.primary.dark};
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.6);
  }

  input::placeholder {
    ${(props) => props.theme.colors.muted};
  }
`;

export default InputLabelStyled;

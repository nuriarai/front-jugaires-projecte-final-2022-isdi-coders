import styled from "styled-components";

const LayoutStyled = styled.div`
  padding: 20px;
  .page__title {
    color: ${(props) => props.theme.colors.primary.light};
    text-align: center;
    margin: 40px auto;
  }

  a,
  a:visited {
    color: ${(props) => props.theme.colors.contrast.base};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.primary.light};
    }
  }
`;

export default LayoutStyled;

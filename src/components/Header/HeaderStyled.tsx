import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary.base};
`;

export default HeaderStyled;

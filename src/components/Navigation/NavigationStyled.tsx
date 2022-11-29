import styled from "styled-components";

const NavigationStyled = styled.div`
  .menu {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30px;
    height: 25px;
  }

  .menu__toggle {
    width: 30px;
    height: 25px;
    display: inline-block;
    position: relative;
    top: 0;
    right: 0;
    z-index: 1000;
    cursor: pointer;
  }

  .menu__toggle i {
    position: absolute;
    display: block;
    height: 3px;
    background: ${(props) => props.theme.colors.primary.light};
    width: 30px;
    right: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }

  .menu__toggle i:nth-child(1) {
    top: 1px;
  }

  .menu__toggle i:nth-child(2) {
    top: 9px;
  }

  .menu__toggle i:nth-child(3) {
    top: 17px;
  }

  .menu__toggle.open i:nth-child(1) {
    top: 10px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  .menu__toggle.open i:nth-child(2) {
    background: transparent;
  }

  .menu__toggle.open i:nth-child(3) {
    top: 10px;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
  }

  .menu__navigation {
    color: ${(props) => props.theme.colors.primary.light};
    width: 100%;
    max-width: 600px;
    background-color: ${(props) => props.theme.colors.primary.base};
    height: calc(100vh - (93px));
    position: absolute;
    right: -850px;
    top: 94px;
    transition: right linear 0.2s;
    padding: ${(props) => props.theme.sizes.paddingBig};
    &.opened {
      right: 0px;
      transition: right linear 0.2s;
    }

    .visible {
      display: block;
    }
    .hidden {
      display: none;
    }

    li a,
    li:not(:has(a)) {
      padding: 20px 0;
      display: block;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary.dark};
    }
  }
`;

export default NavigationStyled;

import styled from "styled-components";

const LoadingStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(115, 119, 196, 0.7);
  color: ${(props) => props.theme.colors.contrast.base};
  .loader {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 44%;

    background-image: linear-gradient(
        ${(props) => props.theme.colors.primary.light} 16px,
        transparent 0
      ),
      linear-gradient(
        ${(props) => props.theme.colors.contrast.base} 16px,
        transparent 0
      ),
      linear-gradient(
        ${(props) => props.theme.colors.contrast.base} 16px,
        transparent 0
      ),
      linear-gradient(
        ${(props) => props.theme.colors.primary.dark} 16px,
        transparent 0
      );
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: left top, left bottom, right top, right bottom;
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;

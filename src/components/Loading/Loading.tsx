import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <span
        className="loader"
        role="img"
        aria-label="la pàgina està carregant"
      ></span>
    </LoadingStyled>
  );
};

export default Loading;

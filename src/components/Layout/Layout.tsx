import LayoutStyled from "./LayoutStyled";
import Button from "../Button/Button";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <main>
        <h1 className="app">Jugaires</h1>
        <Button className="button__main" text="Registra't" />
      </main>
    </LayoutStyled>
  );
};

export default Layout;

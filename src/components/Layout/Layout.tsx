import LayoutStyled from "./LayoutStyled";
import Button from "../Button/Button";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <main>
        <div className="app">Jugaires</div>
        <Button className="button__main" text="Registra't" />
      </main>
    </LayoutStyled>
  );
};

export default Layout;

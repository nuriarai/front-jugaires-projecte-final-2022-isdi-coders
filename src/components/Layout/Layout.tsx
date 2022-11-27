import LayoutStyled from "./LayoutStyled";
import RegisterForm from "../RegisterForm/RegisterForm";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <main>
        <h1>Jugaires</h1>
        <RegisterForm />
      </main>
    </LayoutStyled>
  );
};

export default Layout;

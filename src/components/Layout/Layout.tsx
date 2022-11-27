import LayoutStyled from "./LayoutStyled";
import Button from "../Button/Button";

import { useAppDispatch } from "../../redux/hooks";
import { showModalActionCreator } from "../../redux/features/uiSlice";
import InputLabel from "../InputLabel/InputLabel";
import RegisterForm from "../RegisterForm/RegisterForm";

const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();

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

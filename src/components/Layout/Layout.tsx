import LayoutStyled from "./LayoutStyled";
import Button from "../Button/Button";

import { useAppDispatch } from "../../redux/hooks";
import { showModalActionCreator } from "../../redux/features/uiSlice";

const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <LayoutStyled>
      <main>
        <h1>Jugaires</h1>
        <Button
          className="button__main"
          text="Registra't"
          semantic="button"
          action={() =>
            dispatch(
              showModalActionCreator({
                message: "Alguna cosa no ha anat bé",
                modalType: "error",
              })
            )
          }
        />
      </main>
    </LayoutStyled>
  );
};

export default Layout;

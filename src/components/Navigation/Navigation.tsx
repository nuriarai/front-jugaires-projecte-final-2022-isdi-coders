import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { userLogout } = useUser();
  const { isLogged, username } = useAppSelector((state) => state.user);

  const menuHandler = (event: SyntheticEvent) => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    userLogout();
  };

  return (
    <NavigationStyled>
      <div className="menu">
        <span
          className={isOpen ? "menu__toggle open" : "menu__toggle"}
          onClick={menuHandler}
        >
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <nav className={`menu__navigation ${isOpen && "opened"}`}>
        <span className={isLogged ? "visible" : "hidden"}>
          Hola, {username}
        </span>
        <ul>
          <li>
            <NavLink to="/partides" onClick={menuHandler}>
              Partides
            </NavLink>
          </li>
          <li>
            <NavLink to="/nova-partida" onClick={menuHandler}>
              Crear nova partida
            </NavLink>
          </li>
          <li>Contacte</li>
          <li className={isLogged ? "hidden" : "visible"}>
            <NavLink
              className="button button--login"
              to="/login"
              onClick={menuHandler}
            >
              Inici de sessió
            </NavLink>
          </li>
          <li className={isLogged ? "hidden" : "visible"}>
            <NavLink
              className="button button--registre"
              to="/register"
              onClick={menuHandler}
            >
              Registre
            </NavLink>
          </li>
          <li className={isLogged ? "visible" : "hidden"}>
            <Button
              text="Sortir"
              action={logoutHandler}
              className="button--logout"
            ></Button>
          </li>
        </ul>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;

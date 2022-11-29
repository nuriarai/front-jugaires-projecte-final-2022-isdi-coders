import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import jugaires_logo from "../../assets/images/jugaires_logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="container">
      <Link to="/">
        <img
          src={jugaires_logo}
          width="150"
          height="47"
          alt="Jugaires, riu i juga, juga i riu"
        />
      </Link>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;

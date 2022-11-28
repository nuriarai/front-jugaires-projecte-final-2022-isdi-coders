import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1 className="page__title page__404">404</h1>
      <p className="content">
        Ho sentim, però aquesta pàgina no existeix. Et recomanem que naveguis
        pel menú o bé que tornis a la <Link to="/">pàgina d'inici</Link> per
        veure què hi pots trobar en el nostre lloc web.
      </p>
    </NotFoundPageStyled>
  );
};
export default NotFoundPage;

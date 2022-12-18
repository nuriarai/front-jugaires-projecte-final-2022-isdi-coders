import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useGame from "../../hooks/useGames/useGames";
import { Game } from "../../types/gameTypes";
import dateFormat from "../../utils/dateFormat";
import Button from "../Button/Button";
import GameDetailStyled from "./GameDetailStyled";

interface GameDetailProps {
  gameData: Game;
}

const GameDetail = ({
  gameData: {
    id,
    gameBoard,
    dateTime,
    location,
    owner,
    addressLocation,
    picture,
    pictureBackup,
    duration,
    minPlayers,
    maxPlayers,
    observations,
  },
}: GameDetailProps): JSX.Element => {
  const { deleteGame } = useGame();
  const navigate = useNavigate();

  const handleDelete = () => {
    global.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    deleteGame(id);
    navigate("/partides");
  };
  const players =
    minPlayers === maxPlayers
      ? `${minPlayers} jugadors/es`
      : `Entre ${minPlayers} i ${maxPlayers} jugadors/es`;

  return (
    <GameDetailStyled className="game-detail">
      <div className="game-detail__image">
        <img src={picture} alt="gent jugant al mahjong" />
      </div>
      <span className="page__title-pre">Partida de </span>
      <h1 className="page__title">{gameBoard}</h1>
      <span className="game-detail__date">{dateFormat(dateTime)}</span>

      <div className="game-detail__content">
        <div className="game-detail__wrap-data game-detail__wrap-data--location">
          <span className="game-detail__label">Lloc</span>
          <span className="game-detail__location">{location}</span>
          <span className="game-detail__address">{addressLocation}</span>
        </div>
        <div className="game-detail__wrap-data game-detail__wrap-data--capacity">
          <span className="game-detail__label">Places</span>
          <span className="game-detail__players">{players}</span>
        </div>
        <div className="game-detail__wrap-data game-detail__wrap-data--observations">
          <span className="game-detail__label">Més info</span>
          <p className="game-detail__observations">{observations}</p>
        </div>
        <Link className="button--button button--reversed" to="/register">
          T'hi apuntes?
        </Link>
      </div>
      <div className="game-detail__icons">
        <Button
          ariaLabel="editar partida"
          className="button--icon-card circle button--edit"
          children={<FiEdit />}
        />
        <Button
          ariaLabel="esborrar partida"
          className="button--icon-card circle button--remove"
          children={<FiTrash2 />}
          action={handleDelete}
        />
      </div>
    </GameDetailStyled>
  );
};

export default GameDetail;

import { Game } from "../../types/gameTypes";
import GameCardStyled from "./GameCardStyled";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { FiInfo, FiEdit, FiTrash2 } from "react-icons/fi";
import useGame from "../../hooks/useGames/useGames";
import dateFormat from "../../utils/dateFormat";

interface GameCardProps {
  gameData: Game;
}

const GameCard = ({
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
}: GameCardProps): JSX.Element => {
  const navigate = useNavigate();
  const { deleteGame } = useGame();

  const handleDelete = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    deleteGame(id);
  };

  return (
    <GameCardStyled className="game-card">
      <div className="game__image">
        <img src={picture} width="335" height="189" alt="" />
        <Button
          className="button--icon-card circle"
          children={<FiInfo />}
          action={() => navigate(`/partida/${id}`)}
          ariaLabel="Anar al detall de la partida"
        />
      </div>
      <div className="game__separator">
        <svg
          width="335"
          height="54"
          viewBox="0 0 335 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M333 5.86235V51.8393H2V5.86235C16.3785 22.176 43.1341 29.6925 69.5454 25.0554C73.1648 24.6121 76.8141 24.1261 80.4612 23.6394C97.6774 21.3417 114.731 19.0807 129.703 21.2645C144.525 23.4265 157.169 29.9253 165.757 45.1808L167.509 48.292L169.247 45.1734C177.788 29.8508 190.334 23.3296 205.035 21.1602C219.89 18.968 236.817 21.238 253.94 23.5498L254.207 21.5732L253.94 23.5498L254.006 23.5586C257.83 24.0748 261.657 24.5915 265.455 25.0566C291.866 29.6937 318.622 22.1762 333 5.86235Z"
            fill="#FCBC1D"
            stroke="#FCBC1D"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="game__content">
        <div className="game__icons">
          <Button
            ariaLabel="editar partida"
            className="button--icon-card"
            children={<FiEdit />}
          />
          <Button
            ariaLabel="esborrar partida"
            className="button--icon-card button--remove"
            children={<FiTrash2 />}
            action={handleDelete}
          />
        </div>
        <h2 className="game__title">{gameBoard}</h2>
        <span className="game__date">{dateFormat(dateTime)}</span>
        <span className="game__location">{location}</span>
        <span className="game__address">{addressLocation}</span>
        <p className="game__observations">{observations}</p>
        <Link className="button--button" to="/register">
          Registra't per venir
        </Link>
      </div>
    </GameCardStyled>
  );
};

export default GameCard;

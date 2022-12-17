import { Game } from "../../types/gameTypes";
import GameCard from "../GameCard/GameCard";
import GamesListStyled from "./GamesListStyled";

interface GamesListProps {
  games: Game[];
}

const GamesList = ({ games }: GamesListProps): JSX.Element => {
  return (
    <GamesListStyled>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard gameData={game} />
        </li>
      ))}
    </GamesListStyled>
  );
};

export default GamesList;

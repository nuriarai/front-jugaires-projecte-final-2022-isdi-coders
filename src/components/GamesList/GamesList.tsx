import { useEffect } from "react";
import useGame from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import GameCard from "../GameCard/GameCard";
import GamesListStyled from "./GamesListStyled";

const GamesList = (): JSX.Element => {
  const games = useAppSelector(({ game: Games }) => Games.list);
  const { loadGames } = useGame();

  useEffect(() => {
    loadGames();
  }, [loadGames]);

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

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "../../components/GameDetail/GameDetail";
import useGame from "../../hooks/useGames/useGames";
import { useAppSelector } from "../../redux/hooks";
import { Game } from "../../types/gameTypes";

const DetailGamePage = (): JSX.Element => {
  const { id } = useParams();
  const { getGameById } = useGame();

  useEffect(() => {
    getGameById(id!);
  }, [getGameById, id]);

  const currentGame: Game = useAppSelector((state) => state.game.currentGame!);

  return (
    <>
      <GameDetail gameData={currentGame} />
    </>
  );
};
export default DetailGamePage;

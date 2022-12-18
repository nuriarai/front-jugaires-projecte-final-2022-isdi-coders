import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import useGame from "../../hooks/useGames/useGames";
import {
  filterGamesActionCreator,
  loadGamesPagesActionCreator,
  nextGamesPageActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import Button from "../../components/Button/Button";
import AllFormsStyled from "../../styles/formStyles";
import GamesPageStyled from "./GamesPageStyled";

const GamesPage = (): JSX.Element => {
  const games = useAppSelector(({ game: Games }) => Games.list);
  const { currentPage, isNextPage } = useAppSelector(({ game }) => game.pages);
  const { loadGames } = useGame();
  const dispatch = useAppDispatch();

  const loadMoreGames = () => {
    loadGames(currentPage + 1);
    dispatch(nextGamesPageActionCreator());
  };

  const filterGameBoard = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "default") {
      const filterValue: string = event.target.value;
      dispatch(filterGamesActionCreator({ gameBoard: filterValue }));
      dispatch(
        loadGamesPagesActionCreator({
          totalPages: 1,
          currentPage: 0,
          isNextPage: true,
        })
      );
      loadGames(0, filterValue);
    }
  };

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <GamesPageStyled>
      <h1 className="page__title">Partides</h1>
      <AllFormsStyled className="games__filter">
        <label className="filter__label" htmlFor="gameBoard">
          Filtra per joc:
        </label>
        <select
          className="form__select filter__select"
          id="gameBoard"
          onChange={filterGameBoard}
        >
          <option value="default">Totes les partides</option>
          <option value="Podrida">Podrida</option>
          <option value="Canasta">Canasta</option>
          <option value="Dòmino">Dòmino</option>
          <option value="Continental">Continental</option>
          <option value="Butifarra">Butifarra</option>
          <option value="Mentider">Mentider</option>
        </select>
      </AllFormsStyled>
      <GamesList games={games} />
      {isNextPage && (
        <Button
          className="button--button button--reversed"
          text="Més partides"
          action={loadMoreGames}
          ariaLabel="Carregar més partides"
        />
      )}
    </GamesPageStyled>
  );
};
export default GamesPage;

import { getRandomGames } from "../factories/gameFactory";
import { Game, GamesPagination, GamesState } from "../types/gameTypes";

export const mockGamesListOfFive = getRandomGames(5);

export const mockGamesListOfMany = getRandomGames(20);

export const mockGamesList = getRandomGames(2);

export const mockOneGame = getRandomGames(1);

export const mockGamePages: GamesPagination = {
  currentPage: 0,
  totalPages: 2,
  isNextPage: true,
};

export const mockGameEmpty: Game = {
  id: "",
  owner: "",
  gameBoard: "",
  dateTime: "",
  picture: "",
  pictureBackup: "",
  location: "",
  addressLocation: "",
  minPlayers: 2,
  maxPlayers: 2,
  duration: "",
  observations: "",
};

export const mockInitialGameState: GamesState = {
  list: [],
  currentGame: {} as Game,
  pages: mockGamePages,
};

export const gamesListOfFive: GamesState = {
  list: mockGamesListOfFive,
  currentGame: mockOneGame[0],
  pages: mockGamePages,
};

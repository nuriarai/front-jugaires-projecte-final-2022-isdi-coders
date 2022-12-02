import { getRandomGames } from "../factories/gameFactory";
import { GamesState } from "../types/gameTypes";

export const mockGamesListOfFive = getRandomGames(5);

export const mockGamesList = getRandomGames(2);

export const mockInitialGameState: GamesState = {
  list: [],
};

export const gamesListOfFive: GamesState = {
  list: mockGamesListOfFive,
};

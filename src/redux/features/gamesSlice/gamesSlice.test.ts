import {
  gamesListOfFive,
  mockGameEmpty,
  mockGamesListOfFive,
  mockOneGame,
} from "../../../mooks/mocksGames";
import { GamesState } from "../../../types/gameTypes";
import {
  deleteGameActionCreator,
  gamesReducer,
  getGameByIdActionCreator,
  loadGamesActionCreator,
} from "./gamesSlice";

describe("Given a function gamesReducer", () => {
  describe("When it's invoked with an empty state and an empty type", () => {
    test("Then it should return an empty list of games", () => {
      const currentEmptyState = {
        list: [],
      };
      const emptyActionCreator = { type: "unknown" };

      const newGameState = gamesReducer(currentEmptyState, emptyActionCreator);

      expect(newGameState.list).toStrictEqual([]);
    });
  });

  describe("When the loadGamesActionCreator is invoked with an empty current state and five games", () => {
    test("Then it should return a new state with five games", () => {
      const currentEmptyState = {
        list: [],
      };
      const loadGames = loadGamesActionCreator(mockGamesListOfFive);

      const newGameState = gamesReducer(currentEmptyState, loadGames);

      const expectedGamesState = { list: mockGamesListOfFive };

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the deleteGameActionCreator is invoked with a correct id and a list of five", () => {
    test("Then it should return a new state with one game less", () => {
      const currentState = gamesListOfFive;
      const expectedGamesState = {
        ...gamesListOfFive,
        list: gamesListOfFive.list.slice(1, 5),
      };

      const newState = gamesReducer(
        currentState,
        deleteGameActionCreator(currentState.list[0].id)
      );

      expect(newState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the getGameByIdActionCreator is invoked with a correct id", () => {
    test("Then it should return a new state with the data of this id", () => {
      const currentEmptyState: GamesState = {
        list: [],
        currentGame: mockGameEmpty,
      };
      const expectedGamesState = { list: [], currentGame: mockOneGame[0] };

      const getGameById = getGameByIdActionCreator(mockOneGame[0]!);

      const newGameState = gamesReducer(currentEmptyState, getGameById);

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });
});

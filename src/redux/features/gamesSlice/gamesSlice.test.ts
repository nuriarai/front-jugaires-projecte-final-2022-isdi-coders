import {
  gamesListOfFive,
  mockGamesListOfFive,
} from "../../../mooks/mocksGames";
import {
  deleteGameActionCreator,
  gamesReducer,
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
  describe("When the loadGamesActionCreator is invoked with an empty current state and two games", () => {
    test("Then it should return a new state with two games", () => {
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
});

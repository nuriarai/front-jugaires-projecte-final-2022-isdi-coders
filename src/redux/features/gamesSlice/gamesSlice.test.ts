import { mockGamesListOfFive } from "../../../mooks/mocksGames";
import { gamesReducer, loadGamesActionCreator } from "./gamesSlice";

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
});

describe("When the loadRobotsActionCreator is invoked with an empty current state and two games", () => {
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

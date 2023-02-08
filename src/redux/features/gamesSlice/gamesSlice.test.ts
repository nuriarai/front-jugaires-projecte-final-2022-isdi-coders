import { getRandomGames } from "../../../factories/gameFactory";
import {
  gamesListOfFive,
  mockGameEmpty,
  mockGamePages,
  mockGamesListOfFive,
  mockOneGame,
  mockGamesListOfMany,
} from "../../../mooks/mocksGames";
import { GamesState } from "../../../types/gameTypes";
import {
  deleteGameActionCreator,
  filterGamesActionCreator,
  gamesReducer,
  getGameByIdActionCreator,
  loadGamesActionCreator,
  loadGamesPagesActionCreator,
  loadMoreGamesActionCreator,
  nextGamesPageActionCreator,
} from "./gamesSlice";

describe("Given a function gamesSlice", () => {
  describe("When it's invoked with an empty state and an empty type", () => {
    test("Then it should return an empty list of games", () => {
      const currentEmptyState = {
        list: [],
        pages: mockGamePages,
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
        pages: mockGamePages,
      };
      const loadGames = loadGamesActionCreator(mockGamesListOfFive);

      const newGameState = gamesReducer(currentEmptyState, loadGames);

      const expectedGamesState = {
        list: mockGamesListOfFive,
        pages: mockGamePages,
      };

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the loadMoreGamesActionCreator is invoked with an initial state and a list of five more games", () => {
    test("Then it should return a new state with the new list of games", () => {
      const currentGamesState: GamesState = {
        list: getRandomGames(10),
        pages: mockGamePages,
      };
      const newGamesList = mockGamesListOfFive;
      const loadMoreGamesAction = loadMoreGamesActionCreator(newGamesList);
      const expectedGamesState: GamesState = {
        list: [...currentGamesState.list, ...newGamesList],
        pages: mockGamePages,
      };
      const newGameState = gamesReducer(currentGamesState, loadMoreGamesAction);

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the loadGamesPageActionCreator is invoked with an empty initial state and current page 0 and total pages 2", () => {
    test("Then it should return a new state with the received pages", () => {
      const currentGamesState: GamesState = {
        list: [],
        pages: { currentPage: 0, totalPages: 2, isNextPage: true },
      };
      const expectedGamesState: GamesState = {
        ...currentGamesState,
        pages: currentGamesState.pages,
      };

      const loadGamesPagesAction = loadGamesPagesActionCreator(
        currentGamesState.pages
      );

      const newGameState = gamesReducer(
        currentGamesState,
        loadGamesPagesAction
      );

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the nextGamesPageActionCreator is invoked with an empty initial state and current page 0 and total pages 2", () => {
    test("Then it should return a new state with current page 1", () => {
      const currentGamesState: GamesState = {
        list: getRandomGames(10),
        pages: { currentPage: 0, totalPages: 2, isNextPage: true },
      };
      const expectedGamesState: GamesState = {
        ...currentGamesState,
        pages: { ...currentGamesState.pages, currentPage: 1 },
      };

      const newGamesState = gamesReducer(
        currentGamesState,
        nextGamesPageActionCreator()
      );

      expect(newGamesState).toStrictEqual(expectedGamesState);
    });
  });

  describe("When the filterGamesActionCreator is invoked with one gameBoard selected", () => {
    test("Then it should return a new state with current page 0 and the games that has the gameboard selected'", () => {
      const currentGamesState: GamesState = {
        list: mockGamesListOfMany,
        pages: { currentPage: 0, totalPages: 2, isNextPage: true },
      };
      const expectedGamesState: GamesState = {
        ...currentGamesState,
        pages: { ...currentGamesState.pages, currentPage: 0 },
        filter: { gameBoard: mockGamesListOfMany[0].gameBoard },
      };

      const filterGamesAction = filterGamesActionCreator({
        gameBoard: mockGamesListOfMany[0].gameBoard,
      });

      const newGamesState = gamesReducer(currentGamesState, filterGamesAction);

      expect(newGamesState).toStrictEqual(expectedGamesState);
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
        pages: mockGamePages,
      };
      const expectedGamesState = {
        list: [],
        currentGame: mockOneGame[0],
        pages: mockGamePages,
      };

      const getGameById = getGameByIdActionCreator(mockOneGame[0]!);

      const newGameState = gamesReducer(currentEmptyState, getGameById);

      expect(newGameState).toStrictEqual(expectedGamesState);
    });
  });
});

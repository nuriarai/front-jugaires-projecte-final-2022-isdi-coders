import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mockInitialStore from "../../mooks/mockInitialStore";
import { ShowModalActionPayload } from "../../redux/features/types";
import { showModalActionCreator } from "../../redux/features/uiSlice";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import useGame from "./useGames";
import { mockGamesList, mockGamesListOfFive } from "../../mooks/mocksGames";
import {
  deleteGameActionCreator,
  getGameByIdActionCreator,
  loadMoreGamesActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");
beforeEach(() => {
  jest.clearAllMocks();
});
const mockOfOne = mockGamesListOfFive[3];

describe("Given the useGame custom hook", () => {
  describe("When its method loadGames is invoked", () => {
    describe("and there is no errors", () => {
      test("Then it should invoke dispatch with loadGames action creator and a list of 5 games", async () => {
        const {
          result: {
            current: { loadGames },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });

        await loadGames();

        expect(dispatchSpy).toHaveBeenCalled();
      });
    });

    describe("and Axios return an error", () => {
      test("Then dispatch should be called with show & hide modal and loading action creators, and modal with an error", async () => {
        const {
          result: {
            current: { loadGames },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });
        const modalPayload: ShowModalActionPayload = {
          modalType: "error",
          message: "No s'ha pogut carregar el llistat de partides",
        };

        await loadGames();

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        );
      });
    });
  });

  describe("When its method loadGames is invoked with page 1", () => {
    test("Then it should invoke dispatch with loadMoreGamesAction and a list of games", async () => {
      const {
        result: {
          current: { loadGames },
        },
      } = renderHook(() => useGame(), {
        wrapper: ProviderWrapper,
      });

      await loadGames(1);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadMoreGamesActionCreator(mockGamesList)
      );
    });
  });

  describe("When its method deleteGame is invoked", () => {
    describe("with an id that belong to an array of five games", () => {
      test("Then is should invoke dispatch with deleteGame action creator and remove the game with the id from the array", async () => {
        const { id } = mockGamesListOfFive[0];
        const {
          result: {
            current: { deleteGame },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });

        await deleteGame(id);
        expect(dispatchSpy).toHaveBeenCalledWith(deleteGameActionCreator(id));
      });
    });

    describe("and Axios return an error", () => {
      test("Then dispatch should be called with show & hide modal and loading action creators, and modal with an error", async () => {
        const { id } = mockGamesListOfFive[0];
        const {
          result: {
            current: { deleteGame },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });
        const modalPayload: ShowModalActionPayload = {
          modalType: "error",
          message: "No s'ha pogut esborrar la partida",
        };

        await deleteGame(id);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        );
      });
    });
  });

  describe("When its method createGame is invoked", () => {
    describe("and there is no errors", () => {
      test("Then it should invoke dispatch with createGame action creator and a list of 5 games", async () => {
        const {
          result: {
            current: { createGame },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });

        await act(async () => createGame(mockOfOne));

        expect(dispatchSpy).toHaveBeenCalled();
      });
    });

    describe("and Axios retunr an errors", () => {
      test("Then it should invoke dispatch with createGame action creator and an error", async () => {
        const {
          result: {
            current: { createGame },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });
        const modalPayload: ShowModalActionPayload = {
          modalType: "error",
          message: "No s'ha pogut crear la partida.",
        };
        await createGame(mockOfOne);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        );
      });
    });
  });

  describe("When its method getGameById is invoked with an id", () => {
    describe("and there is no errors", () => {
      test("Then it should invoke dispatch with getGameById action creator with the game of the received id", async () => {
        const mockGame = mockGamesListOfFive[3];

        const {
          result: {
            current: { getGameById },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });

        await getGameById(mockGame.id);

        expect(dispatchSpy).toHaveBeenCalledWith(
          getGameByIdActionCreator(mockGame)
        );
      });
    });

    describe("and Axios retrn an error", () => {
      test("Then dispatch should be called with show & hide modal and loading action creators, and modal with an error", async () => {
        const mockGame = mockGamesListOfFive[3];
        const {
          result: {
            current: { getGameById },
          },
        } = renderHook(() => useGame(), {
          wrapper: ProviderWrapper,
        });
        const modalPayload: ShowModalActionPayload = {
          modalType: "error",
          message: "No s'ha trobat aquesta partida",
        };

        await getGameById(mockGame.id);

        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        );
      });
    });
  });
});

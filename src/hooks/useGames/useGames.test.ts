import { renderHook } from "@testing-library/react";
import mockInitialStore from "../../mooks/mockInitialStore";
import { ShowModalActionPayload } from "../../redux/features/types";
import { showModalActionCreator } from "../../redux/features/uiSlice";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import useGame from "./useGames";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

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
      test("Then dispatch should be called wiht show & hide modal and loading action creators, and modal wiht an error", async () => {
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
});

import mockUiState from "../../mooks/mockUiState";
import { ShowModalActionPayload, UiState } from "../../types/uiTypes";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it is invoked", () => {
    describe("and it receives the initial ui state and an unknown action", () => {
      test("Then it should return a copy of the initial ui state", () => {
        const unknownAction = {
          type: "ui/unknownAction",
        };

        const newUiState = uiReducer(mockUiState, unknownAction);

        expect(newUiState).toStrictEqual(mockUiState);
      });
    });

    describe("and it receives the initial ui state and a show loading action", () => {
      test("Then it should return a copy of the initial state with isLoading true", () => {
        const expectedUiState = {
          ...mockUiState,
          isLoading: true,
        };

        const newUiState = uiReducer(mockUiState, showLoadingActionCreator());

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives the initial ui state with loading true and a hide loading action", () => {
      test("Then it should return a copy of the initial state with isLoading false", () => {
        const initialUiState: UiState = {
          ...mockUiState,
          isLoading: true,
        };
        const expectedUiState: UiState = {
          ...mockUiState,
          isLoading: false,
        };

        const newUiState = uiReducer(
          initialUiState,
          hideLoadingActionCreator()
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives an initial state with isOpen true and a hideModal action creator", () => {
      test("Then it should return a copy of the initial state with isModal false", () => {
        const initialUiState: UiState = {
          ...mockUiState,
          modal: {
            isOpen: true,
            message: "",
            modalType: "none",
          },
        };

        const expectedUiState: UiState = {
          ...mockUiState,
          modal: {
            ...mockUiState.modal,
            isOpen: false,
          },
        };

        const newUiState = uiReducer(initialUiState, hideModalActionCreator());

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives the initial ui state and a show modal action creator with payload with type 'error' and text 'There was an error'", () => {
      test("Then it should return a copy of the initial state with isOpen true, modalType 'error' and message 'There was an error'", () => {
        const actionPayload: ShowModalActionPayload = {
          modalType: "error",
          message: "There was an error",
        };
        const initialUiState: UiState = mockUiState;

        const expectedUiState: UiState = {
          ...mockUiState,
          modal: {
            isOpen: true,
            modalType: actionPayload.modalType,
            message: actionPayload.message,
          },
        };

        const newUiState = uiReducer(
          initialUiState,
          showModalActionCreator(actionPayload)
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives an initial ui state and a show modal action creator with payload with type 'success' and text 'All has been good!'", () => {
      test("Then it should return a copy of the initial state with isOpen true, modalType 'success' and message 'All has been good'", () => {
        const actionPayload: ShowModalActionPayload = {
          modalType: "success",
          message: "All has been good",
        };
        const initialUiState: UiState = mockUiState;

        const expectedUiState: UiState = {
          ...mockUiState,
          modal: {
            isOpen: true,
            modalType: actionPayload.modalType,
            message: actionPayload.message,
          },
        };

        const newUiState = uiReducer(
          initialUiState,
          showModalActionCreator(actionPayload)
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives an initial ui state and a show modal action creator with payload with type 'alert' and text 'Attention, something happen!'", () => {
      test("Then it should return a copy of the initial state with isOpen true, modalType 'success' and message 'All has been good'", () => {
        const actionPayload: ShowModalActionPayload = {
          modalType: "alert",
          message: "Attention, something happened!",
        };
        const initialUiState: UiState = mockUiState;

        const expectedUiState: UiState = {
          ...mockUiState,
          modal: {
            isOpen: true,
            modalType: actionPayload.modalType,
            message: actionPayload.message,
          },
        };

        const newUiState = uiReducer(
          initialUiState,
          showModalActionCreator(actionPayload)
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });
  });
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "../../types/uiTypes";

const initialUiState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    message: "",
    modalType: "none",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),

    showModal: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ): UiState => ({
      ...currentUiState,
      modal: {
        isOpen: true,
        modalType: action.payload.modalType,
        message: action.payload.message,
      },
    }),

    hideModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        isOpen: false,
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;

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
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),

    showModal: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...currentUiState,
      isOpen: true,
      modalType: action.payload.modalType,
      message: action.payload.message,
    }),

    hideModal: (currentUiState) => ({
      ...currentUiState,
      isOpen: false,
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

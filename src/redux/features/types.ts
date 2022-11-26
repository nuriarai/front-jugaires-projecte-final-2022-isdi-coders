export type modalTypes = "success" | "alert" | "error" | "info";

export interface UiState {
  isLoading: boolean;
  modal: {
    isOpen: boolean;
    message: string;
    modalType: modalTypes;
  };
}

export interface ShowModalActionPayload {
  message: string;
  modalType: modalTypes;
}

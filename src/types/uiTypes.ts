export interface UiState {
  isLoading: boolean;
  modal: {
    isOpen: boolean;
    message: string;
    modalType: "success" | "alert" | "error" | "none";
  };
}

export interface ShowModalActionPayload {
  modalType: "success" | "alert" | "error" | "none";
  message: string;
}

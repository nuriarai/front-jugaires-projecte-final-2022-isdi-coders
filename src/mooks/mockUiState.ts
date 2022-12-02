import { UiState } from "../redux/features/types";

const mockUiState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    message: "",
    modalType: "success",
  },
};

export const mockUiStateOpen: UiState = {
  isLoading: true,
  modal: {
    isOpen: true,
    message: "",
    modalType: "success",
  },
};

export default mockUiState;

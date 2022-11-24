import { UiState } from "../redux/features/types";

const mockUiState: UiState = {
  isLoading: false,
  modal: {
    isOpen: false,
    message: "",
    modalType: "none",
  },
};

export default mockUiState;
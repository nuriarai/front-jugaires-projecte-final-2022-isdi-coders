import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "../redux/features/gamesSlice/gamesSlice";
import { uiReducer } from "../redux/features/uiSlice";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { store } from "../redux/store";
import mockUiState from "./mockUiState";
import mockUserState from "./mockUserState";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    game: gamesReducer,
  },
  preloadedState: {
    ui: mockUiState,
    user: mockUserState,
  },
});

export default mockInitialStore;

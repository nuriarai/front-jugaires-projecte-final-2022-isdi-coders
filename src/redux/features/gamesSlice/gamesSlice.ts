import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GamesState } from "../../../types/gameTypes";

const gamesInitialState: GamesState = {
  list: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gamesInitialState,
  reducers: {
    loadGames: (
      currentGameState,
      action: PayloadAction<Game[]>
    ): GamesState => ({
      ...currentGameState,
      list: [...action.payload],
    }),

    deleteGame: (
      currentGameState,
      action: PayloadAction<string>
    ): GamesState => ({
      ...currentGameState,
      list: currentGameState.list.filter((game) => game.id !== action.payload),
    }),
  },
});

export const gamesReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
} = gamesSlice.actions;

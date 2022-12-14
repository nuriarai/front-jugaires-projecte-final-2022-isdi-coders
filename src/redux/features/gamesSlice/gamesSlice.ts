import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GamesState } from "../../../types/gameTypes";

const gamesInitialState: GamesState = {
  list: [],
  currentGame: {} as Game,
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

    getGameById: (
      currentGameState,
      action: PayloadAction<Game>
    ): GamesState => ({
      ...currentGameState,
      currentGame: action.payload,
    }),
  },
});

export const gamesReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  getGameById: getGameByIdActionCreator,
} = gamesSlice.actions;

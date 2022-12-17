import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Game,
  GamesFilter,
  GamesPagination,
  GamesState,
} from "../../../types/gameTypes";

const gamesInitialState: GamesState = {
  list: [],
  currentGame: {} as Game,
  pages: {} as GamesPagination,
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

    loadMoreGames: (
      currentGameState,
      action: PayloadAction<Game[]>
    ): GamesState => ({
      ...currentGameState,
      list: [...currentGameState.list, ...action.payload],
    }),

    loadGamesPages: (
      currentGameState,
      action: PayloadAction<GamesPagination>
    ): GamesState => ({
      ...currentGameState,
      pages: {
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        isNextPage: action.payload.isNextPage,
      },
    }),

    nextGamesPage: (currentGameState): GamesState => ({
      ...currentGameState,
      pages: {
        ...currentGameState.pages,
        currentPage: currentGameState.pages.currentPage + 1,
      },
    }),

    filterGames: (
      currentGameState,
      action: PayloadAction<GamesFilter>
    ): GamesState => ({
      ...currentGameState,
      filter: { ...action.payload },
      pages: {
        ...currentGameState.pages,
        currentPage: 0,
      },
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
  loadMoreGames: loadMoreGamesActionCreator,
  loadGamesPages: loadGamesPagesActionCreator,
  nextGamesPage: nextGamesPageActionCreator,
  filterGames: filterGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  getGameById: getGameByIdActionCreator,
} = gamesSlice.actions;

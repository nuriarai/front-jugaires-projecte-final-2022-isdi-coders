export interface Game {
  id: string;
  owner: string;
  gameBoard: string;
  dateTime: string;
  picture: string;
  pictureBackup: string;
  location: string;
  addressLocation: string;
  minPlayers: number;
  maxPlayers: number;
  duration: string;
  observations: string;
}

export interface GameBase {
  owner: string;
  gameBoard: string;
  dateTime: string;
  picture?: string;
  pictureBackup?: string;
  pictureFile?: File;
  location: string;
  addressLocation: string;
  minPlayers: number;
  maxPlayers: number;
  duration: string;
  observations: string;
}

export interface GamesState {
  list: Game[];
  currentGame?: Game;
  pages: GamesPagination;
  filter?: GamesFilter;
}

export interface GamesPagination {
  currentPage: number;
  totalPages: number;
  isNextPage: boolean;
}

export interface GamesFilter {
  gameBoard: string;
}

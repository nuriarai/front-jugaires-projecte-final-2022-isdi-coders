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

export interface GamesState {
  list: Game[];
}

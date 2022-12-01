import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { Game } from "../types/gameTypes";

const gamesFactory = Factory.define<Game>(() => ({
  id: faker.random.alphaNumeric(24),
  owner: faker.random.alphaNumeric(24),
  gameBoard: faker.animal.cat(),
  dateTime: faker.date.future().toDateString(),
  picture: faker.image.imageUrl(),
  pictureBackup: faker.image.imageUrl(),
  location: faker.company.name(),
  addressLocation: faker.address.streetAddress(),
  minPlayers: faker.datatype.number({ min: 2 }),
  maxPlayers: faker.datatype.number({ max: 12 }),
  duration: faker.lorem.words(4),
  observations: faker.lorem.lines(2),
}));

export const getRandomGames = (number: number) =>
  gamesFactory.buildList(number);

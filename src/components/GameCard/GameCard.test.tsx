import { screen } from "@testing-library/react";
import { getRandomGame } from "../../factories/gameFactory";
import { Game } from "../../types/gameTypes";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GameCard from "./GameCard";

describe("Given a Game card component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 2 with the name of the received game", () => {
      let gameData: Game = getRandomGame();

      renderWithProviders(<GameCard gameData={gameData} />);

      const heading = screen.queryByRole("heading", {
        level: 2,
        name: gameData.gameBoard,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

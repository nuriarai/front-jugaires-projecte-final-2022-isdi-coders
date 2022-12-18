import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomGame } from "../../factories/gameFactory";
import { mockGamesListOfFive } from "../../mooks/mocksGames";
import { Game } from "../../types/gameTypes";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GameCard from "./GameCard";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockDelete = jest.fn();
jest.mock("../../hooks/useGames/useGames.ts", () => {
  return () => ({
    deleteGame: mockDelete,
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
});

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

  describe("When it's remove item button it's clicked", () => {
    test("Then it should show a modal with", async () => {
      let gameData: Game = mockGamesListOfFive[0];
      const expectedAriaButtonDelete = "esborrar partida";

      renderWithProviders(<GameCard gameData={gameData} />);

      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      await userEvent.click(expectedDeleteButton!);
      expect(mockDelete).toHaveBeenCalledWith(gameData.id);
    });
  });

  describe("When it's detail info button is clicked", () => {
    test("Then useNavigate should be called", async () => {
      let gameData: Game = mockGamesListOfFive[0];
      const expectedAriaButtonInfo = "Anar al detall de la partida";

      renderWithProviders(<GameCard gameData={gameData} />);

      const expectedInfoButton = screen.getByRole("button", {
        name: expectedAriaButtonInfo,
      });

      await userEvent.click(expectedInfoButton);

      expect(mockNavigate).toHaveBeenCalledWith(`/partida/${gameData.id}`);
    });
  });
});

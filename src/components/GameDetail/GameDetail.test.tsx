import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockGamesListOfFive, mockOneGame } from "../../mooks/mocksGames";
import { Game } from "../../types/gameTypes";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GameDetail from "./GameDetail";

window.scrollTo = jest.fn();
afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

const mockDelete = jest.fn();
jest.mock("../../hooks/useGames/useGames.ts", () => {
  return () => ({
    deleteGame: mockDelete,
  });
});

describe("Given a GameDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading level 2 with the name of the received game", () => {
      let gameData: Game = mockOneGame[0];

      renderWithProviders(<GameDetail gameData={gameData} />);

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: gameData.gameBoard,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's remove item button it's clicked", () => {
    test("Then it should show a modal with", async () => {
      let gameData: Game = mockGamesListOfFive[0];
      const expectedAriaButtonDelete = "esborrar partida";

      renderWithProviders(<GameDetail gameData={gameData} />);

      const expectedDeleteButton = screen.queryByLabelText(
        expectedAriaButtonDelete
      );

      await userEvent.click(expectedDeleteButton!);
      expect(mockDelete).toHaveBeenCalledWith(gameData.id);
    });
  });

  describe("When it is rendered with the minPlayers & maxPlayers with same value 2", () => {
    test("Then it should render a text '2 jugadors/es'", () => {
      let gameData: Game = mockOneGame[0];
      gameData = { ...gameData, minPlayers: 2, maxPlayers: 2 };

      renderWithProviders(<GameDetail gameData={gameData} />);

      const players = screen.queryAllByText("2 jugadors/es");

      expect(players[0]).toBeInTheDocument();
    });
  });
});

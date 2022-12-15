import { screen } from "@testing-library/react";
import mockGamesStore from "../../mooks/mockGamesStore";
import { mockOneGame } from "../../mooks/mocksGames";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import DetailGamePage from "./DetailGamePage";

const mockGetGameById = jest.fn();
jest.mock("../../hooks/useGames/useGames", () => {
  return () => ({
    getGameById: mockGetGameById,
  });
});

describe("Given a detail game page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 wiht the text of the received game", () => {
      const mockGame = mockOneGame[0];

      renderWithProviders(<DetailGamePage />, {
        store: mockGamesStore,
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: mockGame.gameBoard,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

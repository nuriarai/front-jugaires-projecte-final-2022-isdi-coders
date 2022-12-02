import { screen } from "@testing-library/react";
import { mockGamesList } from "../../mooks/mocksGames";
import { store } from "../../redux/store";
import mockUiState from "../../mooks/mockUiState";
import mockUserState from "../../mooks/mockUserState";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GamesList from "./GamesList";

const mockLoadGames = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => {
  return () => ({
    loadGames: mockLoadGames,
  });
});

describe("Given a list of games component", () => {
  describe("When it's rendered with a lsit of 2 games", () => {
    test("Then it should show a list of the games returned", () => {
      const numExpectedGames = 2;

      renderWithProviders(<GamesList />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserState,
          game: { list: mockGamesList },
        },
      });

      const gamesList = screen.queryAllByRole("listitem");

      expect(gamesList).toHaveLength(numExpectedGames);
    });

    test("Then it should call the action", () => {
      renderWithProviders(<GamesList />, {
        store: store,
      });

      expect(mockLoadGames).toHaveBeenCalled();
    });
  });
});
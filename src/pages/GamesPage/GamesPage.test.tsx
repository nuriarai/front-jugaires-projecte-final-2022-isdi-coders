import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockInitialGameState } from "../../mooks/mocksGames";
import mockUiState from "../../mooks/mockUiState";
import mockUserState from "../../mooks/mockUserState";
import {
  filterGamesActionCreator,
  nextGamesPageActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";
import { store } from "../../redux/store";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GamesPage from "./GamesPage";

const mockLoadGames = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => {
  return () => ({
    loadGames: mockLoadGames,
  });
});

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Games page", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with the text 'Partides'", () => {
      const headingText = "Partides";

      renderWithProviders(<GamesPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });

    test("Then it should call the loadGames action", async () => {
      renderWithProviders(<GamesPage />, {
        store: store,
      });

      expect(mockLoadGames).toHaveBeenCalled();
    });
  });

  describe("When is rendered with the GameBoard select in default", () => {
    test("Then it should call the loadGames action", async () => {
      renderWithProviders(<GamesPage />, {
        store: store,
      });

      const filterSelect = screen.getByRole("combobox", {
        name: "Filtra per joc:",
      });

      await userEvent.selectOptions(
        filterSelect,
        screen.getByRole("option", { name: "Totes les partides" })
      );

      expect(mockLoadGames).toHaveBeenCalled();
    });
  });

  describe("When is rendered and it's button 'Més partides' is clicked", () => {
    test("Then it should dispatch nextGamesPageActionCreator", async () => {
      renderWithProviders(<GamesPage />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserState,
          game: {
            ...mockInitialGameState,
            pages: {
              currentPage: 0,
              isNextPage: true,
              totalPages: 2,
            },
          },
        },
      });

      const loadMoreButton = screen.getByRole("button", {
        name: "Carregar més partides",
      });

      await userEvent.click(loadMoreButton);

      expect(mockDispatch).toHaveBeenCalledWith(nextGamesPageActionCreator());
    });
  });

  describe("When it's select gameBoard is selected", () => {
    test("Then it should call filterGamesActionCreator withe gameBoard", async () => {
      renderWithProviders(<GamesPage />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserState,
          game: {
            ...mockInitialGameState,
            pages: {
              currentPage: 0,
              isNextPage: true,
              totalPages: 2,
            },
          },
        },
      });

      const filterSelect = screen.getByRole("combobox", {
        name: "Filtra per joc:",
      });

      await userEvent.selectOptions(
        filterSelect,
        screen.getByRole("option", { name: "Butifarra" })
      );

      expect(mockDispatch).toHaveBeenCalledWith(
        filterGamesActionCreator({ gameBoard: "Butifarra" })
      );
    });
  });
});

import { screen } from "@testing-library/react";
import App from "./App";
import { mockInitialGameState } from "./mooks/mocksGames";
import mockUiState, { mockUiStateOpen } from "./mooks/mockUiState";
import { mockUserStateIsLogged } from "./mooks/mockUserState";
import renderWithProviders from "./utils/testUtils/renderWithProviders";

describe("Given an App component", () => {
  describe("When is rendered and loading is true", () => {
    test("Then it should show a loading with an alt text 'lapàgina està carregant", () => {
      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockUiStateOpen,
          user: mockUserStateIsLogged,
          game: mockInitialGameState,
        },
      });

      const loading = screen.queryByRole("img", {
        name: "la pàgina està carregant",
      });

      expect(loading).toBeInTheDocument();
    });
  });
});

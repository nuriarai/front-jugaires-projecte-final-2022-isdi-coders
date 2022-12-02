import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, useLocation } from "react-router-dom";
import { mockGamesList } from "../../mooks/mocksGames";
import mockUiState from "../../mooks/mockUiState";
import { mockUserStateIsLogged } from "../../mooks/mockUserState";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Navigation from "./Navigation";

const mockUserLogout = jest.fn();
jest.mock("../../hooks/useUser", () => {
  return () => ({
    userLogout: mockUserLogout,
  });
});

describe("Given a Navigation component", () => {
  describe("When a user is logged in and the menu is open", () => {
    test("Then it should show a text with 'Hola' and the username", () => {
      const expectedWelcomedName = "Aina";

      renderWithProviders(<Navigation />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserStateIsLogged,
          game: { list: mockGamesList },
        },
      });

      const welcomeText = screen.queryByText(`Hola, ${expectedWelcomedName}`);
      expect(welcomeText).toBeInTheDocument();
    });

    test("Then it should show the button with text 'Sortir'", () => {
      const buttonText = "Sortir";

      renderWithProviders(<Navigation />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserStateIsLogged,
          game: { list: mockGamesList },
        },
      });

      const button = screen.queryByRole("button", { name: buttonText });
      // eslint-disable-next-line testing-library/no-node-access
      const parentButton = button?.parentNode;

      expect(parentButton).toHaveClass("visible");
    });

    test("Then it should not show the link with text 'Inici de sessió'", () => {
      const linkText = "Inici de sessió";

      renderWithProviders(<Navigation />, {
        preloadedState: {
          ui: mockUiState,
          user: mockUserStateIsLogged,
          game: { list: mockGamesList },
        },
      });
      const link = screen.queryByRole("link", { name: linkText });
      // eslint-disable-next-line testing-library/no-node-access
      const parentLink = link?.parentNode;

      expect(parentLink).toHaveClass("hidden");
    });
  });

  describe("When the link to 'Sortir' is clicked", () => {
    test("Then it should call the userLogout hook", async () => {
      renderWithProviders(<Navigation />);

      const button = screen.getByRole("button", { name: "Sortir" });

      await userEvent.click(button);

      expect(mockUserLogout).toHaveBeenCalled();
    });
  });

  describe("When the link to 'Partides' is clicked", () => {
    test("Then it should render a path '/partides", async () => {
      renderWithProviders(<Navigation />);

      const navPartides = screen.getByRole("link", {
        name: "Partides",
      });

      await userEvent.click(navPartides);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation, { wrapper: BrowserRouter });

      expect(pathname).toBe("/partides");
    });
  });
});

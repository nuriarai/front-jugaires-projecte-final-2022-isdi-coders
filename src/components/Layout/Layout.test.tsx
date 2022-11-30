import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered and receives the route '/'", () => {
    test("Then it should show a RegisterForm component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/"] });

      const usernameInput = screen.queryByRole("heading", { name: "Registre" });

      expect(usernameInput).toBeInTheDocument();
    });
  });

  describe("When its rendered and receives the route '/login'", () => {
    test("Then it should show a the login Page and loginForm component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/login"] });

      const usernameInput = screen.queryByRole("heading", {
        name: "Inici de sessió",
      });

      expect(usernameInput).toBeInTheDocument();
    });
  });
});

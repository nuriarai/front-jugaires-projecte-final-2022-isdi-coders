import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import NewGamePage from "./NewGamePage";

describe("Given a Games page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with the text 'Nova partida'", () => {
      const headingText = "Nova partida";

      renderWithProviders(<NewGamePage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});

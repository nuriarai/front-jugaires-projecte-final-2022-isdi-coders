import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import GamesPage from "./GamesPage";

describe("Given a Games page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with the text 'Partides'", () => {
      const headingText = "Partides";

      renderWithProviders(<GamesPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});

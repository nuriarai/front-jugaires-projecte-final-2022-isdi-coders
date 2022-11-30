import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

import LoginPage from "./LoginPage";

describe("Given a Login page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with the text 'Inici Sessió'", () => {
      const headingText = "Inici de sessió";

      renderWithProviders(<LoginPage />);

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

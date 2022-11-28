import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

import RegisterPage from "./RegisterPage";

describe("Given a Register page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with the text 'Registre'", () => {
      const headingText = "Registre";

      renderWithProviders(<RegisterPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});

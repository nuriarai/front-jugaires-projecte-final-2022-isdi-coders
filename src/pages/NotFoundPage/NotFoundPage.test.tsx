import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

import NotFoundPage from "./NotFoundPage";

describe("Given a Register page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with the text 'Registre'", () => {
      const headingText = "404";

      renderWithProviders(<NotFoundPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});

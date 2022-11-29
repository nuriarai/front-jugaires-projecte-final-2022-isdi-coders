import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a logo image with an alt text 'Jugaires, riu i juga, juga i riu'", () => {
      renderWithProviders(<Header />);

      const header = screen.queryByAltText("Jugaires, riu i juga, juga i riu");

      expect(header).toBeInTheDocument();
    });
  });
});

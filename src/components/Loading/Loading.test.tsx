import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When is rendered", () => {
    test("Then it should show a css loading animation with an 'img' role and an aria label text 'la pàgina està carregant'", () => {
      renderWithProviders(<Loading />);

      const loading = screen.queryByRole("img", {
        name: "la pàgina està carregant",
      });

      expect(loading).toBeInTheDocument();
    });
  });
});

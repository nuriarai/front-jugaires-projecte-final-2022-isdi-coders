import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import InputLabel from "./InputLabel";

describe("Given an input/label component", () => {
  describe("When it receives the label 'Usuari'", () => {
    test("Then it shoudl show a label with text 'Username' on it", () => {
      const labelText = "Usuari";

      renderWithProviders(
        <InputLabel
          label={labelText}
          type="text"
          changeAction={jest.fn}
          value=""
        />
      );

      const inputLabelComponent = screen.queryByRole("textbox", {
        name: `${labelText}:`,
      });

      expect(inputLabelComponent).toBeInTheDocument();
    });
  });
});

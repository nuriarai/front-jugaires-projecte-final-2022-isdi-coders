import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import InputLabel from "./InputLabel";

describe("Given an input/label component", () => {
  describe("When it receives the label 'Usuari'", () => {
    test("Then it shoudl show a label with text 'Username' on it", () => {
      const labelText = "Usuari";

      renderWithProviders(
        <InputLabel
          labelText="Usuari"
          inputId="username"
          wrapperClassName="wrapper"
          inputType="text"
          inputChangeAction={jest.fn}
          inputValue=""
        />
      );

      const inputLabelComponent = screen.queryByRole("textbox", {
        name: `${labelText}:`,
      });

      expect(inputLabelComponent).toBeInTheDocument();
    });
  });
});

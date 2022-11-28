import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    userLogin: mockLoginAction,
  });
});

describe("Given a login form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a form with 2 labels/inputs: Username, Password)", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByLabelText("Usuari:");
      const passwordInput = screen.queryByLabelText("Contrassenya:");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When all it's required inputs are filled", () => {
    test("Then the form has to be submitted", async () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText("Usuari:");
      await userEvent.type(usernameInput, "bigband");
      const passwordInput = screen.getByLabelText("Contrassenya:");
      await userEvent.type(passwordInput, "bigband");

      const button = screen.getByRole("button")!;
      await userEvent.click(button);

      expect(mockLoginAction).toHaveBeenCalled();
    });
  });
});

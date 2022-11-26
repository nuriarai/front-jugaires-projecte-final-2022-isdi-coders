import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    userRegister: mockRegisterAction,
  });
});

describe("Given a register form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a form with 3 labels: Username, Password, Email)", () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByLabelText("Usuari:");
      const passwordInput = screen.queryByLabelText("Contrassenya:");
      const emailInput = screen.queryByRole("textbox", { name: "Email:" });

      expect(usernameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When all it's required input are filled", () => {
    test("Then the form has to be submitted", async () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.getByLabelText("Usuari:");
      await userEvent.type(usernameInput, "bigband");
      const passwordInput = screen.getByLabelText("Contrassenya:");
      await userEvent.type(passwordInput, "bigband");
      const emailInput = screen.getByRole("textbox", { name: "Email:" });
      await userEvent.type(emailInput, "big@band.com");

      const button = screen.getByRole("button")!;
      await userEvent.click(button);

      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});

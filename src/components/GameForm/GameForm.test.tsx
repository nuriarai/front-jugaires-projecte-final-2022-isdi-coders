import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import NewGameForm from "./GameForm";

const mockCreateGameAction = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => {
  return () => ({
    createGame: mockCreateGameAction,
  });
});

describe("Given a New Game form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a form with at least this labels: Username, Password, Email)", () => {
      renderWithProviders(<NewGameForm />);

      const gameInput = screen.queryByLabelText("Joc:");
      const locationInput = screen.queryByLabelText(
        "Lloc on es farà la partida:"
      );
      const addressLocation = screen.queryByRole("textbox", {
        name: "Adreça del lloc:",
      });

      expect(gameInput).toBeInTheDocument();
      expect(addressLocation).toBeInTheDocument();
      expect(locationInput).toBeInTheDocument();
    });
  });

  describe("When all it's required input are filled", () => {
    test("Then the form has to be submitted", async () => {
      renderWithProviders(<NewGameForm />);

      const gameInput = screen.getByLabelText("Joc:");
      await userEvent.type(gameInput, "Podrida");
      const dateTimeInput = screen.getByLabelText("Data i hora de la partida:");
      await userEvent.type(dateTimeInput, "20221223");
      const location = screen.getByLabelText("Lloc on es farà la partida:");
      await userEvent.type(location, "Bar Pepe");
      const addressInput = screen.getByRole("textbox", {
        name: "Adreça del lloc:",
      });
      await userEvent.type(addressInput, "Cainet, 34");
      const minPlayersInput = screen.getByLabelText(
        "Número mínim de persones:"
      );
      await userEvent.type(minPlayersInput, "4");
      const maxPlayersInput = screen.getByLabelText(
        "Número màxim de persones:"
      );
      await userEvent.type(maxPlayersInput, "6");
      const durationInput = screen.getByRole("textbox", {
        name: "Durada aproximada:",
      });
      await userEvent.type(durationInput, "2 hores ");
      const button = screen.getByRole("button")!;
      await userEvent.click(button);
      expect(mockCreateGameAction).toHaveBeenCalled();
    });
  });
});

import "jest-styled-components";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockUiState from "../../mooks/mockUiState";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Modal from "./Modal";
import { hideModalActionCreator } from "../../redux/features/uiSlice";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Modal component", () => {
  describe("When is rendered with an 'error' type", () => {
    test("Then it should show the modal with an 'error' class name and the text provided", () => {
      const modalMessage = "Alguna cosa no ha anat bé";
      const modalType = "modal--error";
      const expectedModals: number = 1;

      const { container } = renderWithProviders(
        <Modal message={modalMessage} modalType={modalType} />,
        {
          preloadedState: { ui: mockUiState },
        }
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const modal = container.getElementsByClassName("modal--error");
      const modalText = screen.queryByText(modalMessage);

      expect(modal).toHaveLength(expectedModals);
      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When its rendered with a 'success' type", () => {
    test("Then it should show the modal with a 'succes' class name and the  text provided", () => {
      const modalMessage = "Tot bé!";
      const modalType = "success";

      const { container } = renderWithProviders(
        <Modal message={modalMessage} modalType={modalType} />,
        {
          preloadedState: { ui: mockUiState },
        }
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const modal = container.getElementsByClassName("success");

      const expectedModals: number = 1;
      const modalText = screen.queryByText(modalMessage);

      expect(modal).toHaveLength(expectedModals);
      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When its close button is clicked", () => {
    test("Then it should be dispatched the hideModalActionCreator", async () => {
      const modalMessage = "Tot bé!";
      const modalType = "success";
      const buttonAriaLabel = "close";

      renderWithProviders(
        <Modal message={modalMessage} modalType={modalType} />,
        {
          preloadedState: { ui: mockUiState },
        }
      );

      const closeButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      });

      await userEvent.click(closeButton!);

      expect(mockDispatch).toHaveBeenCalledWith(hideModalActionCreator());
    });
  });
});

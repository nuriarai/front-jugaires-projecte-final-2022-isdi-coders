import { renderHook, waitFor } from "@testing-library/react";
import { UserCredentialsData, UserRegisterData } from "../types/types";
import ProviderWrapper from "../utils/testUtils/ProviderWrapper";
import { showModalActionCreator } from "../redux/features/uiSlice";
import { ShowModalActionPayload } from "../redux/features/types";
import { store } from "../redux/store";
import useUser from "./useUser";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../redux/features/userSlice/userSlice";
import { JwtCustomPayload } from "./types";
import * as router from "react-router";
import { act } from "react-dom/test-utils";

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "adminId", username: "admin" } as JwtCustomPayload);
});

const mockNavigate = jest.fn();

const mockRemoveToken = jest.fn();
jest.mock("./useToken/useToken", () => {
  return () => ({
    deleteToken: mockRemoveToken,
  });
});

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a useUser custom hook", () => {
  describe("When its method userRegister is invoked with username 'maria23', password 'maria23' and email 'maria23@maria.com'", () => {
    test("Then it should invoke dispatch with showModalActionCreator with type 'success' and text 'T'has registrat correctament. Benvingut/da a Jugaires!'", async () => {
      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const newUser: UserRegisterData = {
        username: "maria47",
        password: "maria47",
        email: "maria47@maria.com",
      };
      const modalPayload: ShowModalActionPayload = {
        modalType: "success",
        message:
          "T'has registrat correctament. Ara entra amb les teves credencials",
      };

      await act(async () => await userRegister(newUser));
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        )
      );
    });

    test("Then the navigation to page login should to be called", async () => {
      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const newUser: UserRegisterData = {
        username: "maria47",
        password: "maria47",
        email: "maria47@maria.com",
      };

      await act(async () => await userRegister(newUser));
      await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/login"));
    });
  });

  describe("When its method registerUser is invoked with username 'registeredAdmin'", () => {
    test("Then it should invoke dispatch with showModalAction creator with text 'This username is already registered'", async () => {
      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const newUser: UserRegisterData = {
        username: "registeredUser",
        password: "",
        email: "",
      };
      const modalPayload: ShowModalActionPayload = {
        modalType: "error",
        message: "Aquest usuari ja està registrat",
      };

      await act(async () => await userRegister(newUser));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'admin' and password 'adminadmin'", () => {
    test("Then it should invoke dispatch with loginUserActionAcreator", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user: UserCredentialsData = {
        username: "admin",
        password: "adminadmin",
      };
      const loginActionPayload = {
        username: "admin",
        id: "adminId",
        token: "adminToken",
      };

      await act(async () => await userLogin(user));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          loginUserActionCreator(loginActionPayload)
        )
      );
    });

    test("Then the navigation to page 'Partides' should to be called", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: UserCredentialsData = {
        username: "admin",
        password: "adminadmin",
      };

      await act(async () => await userLogin(user));

      await waitFor(() =>
        expect(mockNavigate).toHaveBeenCalledWith("/partides")
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'admin' and incorrect password", () => {
    test("Then it should return a 401 error with an 'Usuari o password incorrecte' message", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user: UserCredentialsData = {
        username: "admin",
        password: "incorrectpassword",
      };
      const modalPayload: ShowModalActionPayload = {
        modalType: "error",
        message: "Usuari o password incorrecte",
      };

      await act(async () => await userLogin(user));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          showModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When its method logoutUser is invoked", () => {
    test("Then deleteToken first and dispatch after should be called with 'userLogoutActionCreator'", () => {
      const { result } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      result.current.userLogout();

      expect(mockRemoveToken).toHaveBeenCalled();
      expect(dispatchSpy).toBeCalledWith(logoutUserActionCreator());
    });
  });
});

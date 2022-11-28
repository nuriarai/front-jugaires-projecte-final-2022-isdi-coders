import { renderHook } from "@testing-library/react";
import { UserCredentialsData, UserRegisterData } from "../types/types";
import ProviderWrapper from "../utils/testUtils/ProviderWrapper";
import { showModalActionCreator } from "../redux/features/uiSlice";
import { ShowModalActionPayload } from "../redux/features/types";
import { store } from "../redux/store";
import useUser from "./useUser";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import { JwtCustomPayload } from "./types";

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "adminId", username: "admin" } as JwtCustomPayload);
});

describe("Given a useUser custom hook", () => {
  const {
    result: {
      current: { userRegister },
    },
  } = renderHook(() => useUser(), {
    wrapper: ProviderWrapper,
  });

  describe("When its method userRegister is invoked with username 'maria23', password 'maria23' and email 'maria23@maria.com'", () => {
    test("Then it should invoke dispatch with showModalActionCreator with type 'success' and text 'T'has registrat correctament. Benvingut/da a Jugaires!'", async () => {
      const newUser: UserRegisterData = {
        username: "maria47",
        password: "maria47",
        email: "maria47@maria.com",
      };
      const modalPayload: ShowModalActionPayload = {
        modalType: "success",
        message: "T'has registrat correctament. Benvingut/da a Jugaires!",
      };

      await userRegister(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        showModalActionCreator(modalPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'registeredAdmin'", () => {
    test("Then it should invoke dispatch with showModalAction creator with text 'This username is already registered'", async () => {
      const newUser: UserRegisterData = {
        username: "registeredUser",
        password: "",
        email: "",
      };
      const modalPayload: ShowModalActionPayload = {
        modalType: "error",
        message: "Aquest usuari ja està registrat",
      };

      await userRegister(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        showModalActionCreator(modalPayload)
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

      await userLogin(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(loginActionPayload)
      );
    });
  });
});

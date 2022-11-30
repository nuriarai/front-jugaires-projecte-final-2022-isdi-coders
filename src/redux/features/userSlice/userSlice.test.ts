import { getRandomUser } from "../../../factories/userFactory";
import { UserLoginData, UserState } from "../../../types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

const newUserState = getRandomUser();

const newUserStateEmpty: UserState = {
  username: "",
  token: "",
  id: "",
  isLogged: false,
};

describe("Given a user reducer function", () => {
  describe("When it invokes a logout function", () => {
    test("Then it should return a new state empty and isLogged property false", () => {
      const expectedState = newUserStateEmpty;

      const mockUserStateLogged: UserState = {
        ...newUserState,
        isLogged: true,
      };

      const newState = userReducer(
        mockUserStateLogged,
        logoutUserActionCreator()
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives an empty initial state and a login user action with a new user", () => {
    test("Then it should return a new state with the received user and isLogged property true", () => {
      const expectedState: UserState = {
        ...newUserState,
        isLogged: true,
      };
      const loginActionPayload: UserLoginData = {
        username: newUserState.username,
        id: newUserState.id,
        token: newUserState.token,
      };
      const loginUserAction = loginUserActionCreator(loginActionPayload);
      const newState = userReducer(newUserState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

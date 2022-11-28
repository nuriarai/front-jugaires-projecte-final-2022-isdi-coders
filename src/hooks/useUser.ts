import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { showModalActionCreator } from "../redux/features/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../redux/hooks";

import { UserCredentialsData, UserRegisterData } from "../types/types";
import decodeToken from "../utils/decodeToken";
import { AxiosResponse, JwtCustomPayload } from "./types";

const apiUrl = process.env.REACT_APP_API;

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userRegister = async (registerData: UserRegisterData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, registerData);
      dispatch(
        showModalActionCreator({
          modalType: "success",
          message:
            "T'has registrat correctament. Ara entra amb les teves credencials",
        })
      );
      navigate("/login");
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          modalType: "error",
          message: (error as AxiosError<AxiosResponse>).response?.data.error!,
        })
      );
    }
  };

  const userLogin = async (loginData: UserCredentialsData) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, loginData);

      const { token } = await response.data;

      const userLogged: JwtCustomPayload = decodeToken(token);

      dispatch(
        loginUserActionCreator({
          ...userLogged,
          token,
        })
      );
      navigate("/partides");
      localStorage.setItem("token", token);
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          modalType: "error",
          message: (error as AxiosError<AxiosResponse>).response?.data.error!,
        })
      );
    }
  };

  const userLogout = () => {
    window.localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
  };

  return {
    userRegister,
    userLogin,
    userLogout,
  };
};
export default useUser;

import axios, { AxiosError } from "axios";
import { showModalActionCreator } from "../redux/features/uiSlice";
import { useAppDispatch } from "../redux/hooks";

import { UserRegisterData } from "../types/types.js";
import { AxiosResponse } from "./types.js";

const apiUrl = process.env.REACT_APP_API;

const useUser = () => {
  const dispatch = useAppDispatch();
  const userRegister = async (registerData: UserRegisterData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, registerData);
      dispatch(
        showModalActionCreator({
          modalType: "success",
          message: "T'has registrat correctament. Benvingut/da a Jugaires",
        })
      );
    } catch (error: unknown) {
      let messageAxios = "Global error";
      if (error instanceof AxiosError) {
        error as AxiosError<AxiosResponse>;
        if (error.response) {
          messageAxios = error.response?.data.error!;
        } else if (error.request) {
          messageAxios = "Request with no response";
        } else {
          messageAxios = `Error ${error.message}`;
        }
        dispatch(
          showModalActionCreator({
            modalType: "error",
            message: messageAxios,
          })
        );
      }
    }
  };
  return {
    userRegister,
  };
};

export default useUser;

import axios, { AxiosError } from "axios";
import { showModalActionCreator } from "../redux/features/uiSlice";
import { useAppDispatch } from "../redux/hooks";

import { UserRegisterData } from "../types/types";
import { AxiosResponse } from "./types";

const apiUrl = process.env.REACT_APP_API;

const useUser = () => {
  const dispatch = useAppDispatch();
  const userRegister = async (registerData: UserRegisterData) => {
    try {
      await axios.post(`${apiUrl}/users/register`, registerData);
      dispatch(
        showModalActionCreator({
          modalType: "success",
          message: "T'has registrat correctament. Benvingut/da a Jugaires!",
        })
      );
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            modalType: "error",
            message: (error as AxiosError<AxiosResponse>).response?.data.error!,
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

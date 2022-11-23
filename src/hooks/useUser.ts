import axios, { AxiosError } from "axios";
import { UserRegisterData } from "../types/types.js";

const urlRegister = process.env.REACT_APP_API;

const useUser = () => {
  const userRegister = async (user: UserRegisterData) => {
    try {
      await axios.post(`${urlRegister}/users/register`, user);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
      }
    }
  };

  return {
    userRegister,
  };
};

export default useUser;

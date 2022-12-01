import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { loadGamesActionCreator } from "../../redux/features/gamesSlice/gamesSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { AxiosResponse } from "../types";

const apiUrl = process.env.REACT_APP_API;

const useGame = () => {
  const dispatch = useAppDispatch();

  const loadGames = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${apiUrl}/partides`);

      dispatch(loadGamesActionCreator(response.data.games));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          modalType: "error",
          message: (error as AxiosError<AxiosResponse>).response?.data.error!,
        })
      );
    }
  }, [dispatch]);

  return {
    loadGames,
  };
};
export default useGame;

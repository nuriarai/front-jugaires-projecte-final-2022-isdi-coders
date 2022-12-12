import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteGameActionCreator,
  loadGamesActionCreator,
} from "../../redux/features/gamesSlice/gamesSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Game } from "../../types/gameTypes";
import { AxiosResponse } from "../types";

const apiUrl = process.env.REACT_APP_API;

const useGame = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadGames = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${apiUrl}/games/games`);

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

  const deleteGame = useCallback(
    async (id: string) => {
      try {
        dispatch(showLoadingActionCreator());

        await axios.delete(`${apiUrl}/games/delete/${id}`);
        dispatch(deleteGameActionCreator(id));
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            modalType: "success",
            message: "El missatge s'ha esborrat correctament",
          })
        );
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            modalType: "error",
            message: (error as AxiosError<AxiosResponse>).response?.data.error!,
          })
        );
      }
    },
    [dispatch]
  );

  const createGame = useCallback(
    async (gameData: Partial<Game>) => {
      try {
        dispatch(showLoadingActionCreator());
        await axios.post(`${apiUrl}/games/create`, gameData);

        dispatch(hideLoadingActionCreator());

        navigate("/partides");
        dispatch(
          showModalActionCreator({
            modalType: "success",
            message: "S'ha creat la nova partida.",
          })
        );
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          showModalActionCreator({
            modalType: "error",
            message: (error as AxiosError<AxiosResponse>).response?.data.error!,
          })
        );
      }
    },
    [dispatch, navigate]
  );

  return {
    loadGames,
    deleteGame,
    createGame,
  };
};
export default useGame;

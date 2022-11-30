import { logoutUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";

const useToken = () => {
  const dispatch = useAppDispatch();

  const deleteToken = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
  };

  return { deleteToken };
};

export default useToken;

import ModalStyled from "./ModalStyled";
import Button from "../Button/Button";
import { useAppDispatch } from "../../redux/hooks";
import { hideModalActionCreator } from "../../redux/features/uiSlice";

interface ModalProps {
  modalType: string;
  message: string;
}
const Modal = ({ modalType, message }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <ModalStyled className="modal__wrap">
      <div className={`modal modal--${modalType}`}>
        <p>{message}</p>
        <Button
          ariaLabel="close"
          className="button__icon"
          semantic="icon"
          action={() => dispatch(hideModalActionCreator())}
        />
      </div>
    </ModalStyled>
  );
};

export default Modal;

import InputLabelStyled from "./InputLabelStyled";

interface InputLabelProps {
  wrapperClassName?: string;
  labelText: string;
  inputId: string;
  inputType?: "text" | "password";
  inputRequired?: boolean;
  inputMinLength?: number;
  inputChangeAction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  inputPlaceholder?: string;
}

const InputLabel = ({
  wrapperClassName,
  labelText,
  inputId,
  inputType = "text",
  inputRequired = false,
  inputMinLength,
  inputChangeAction,
  inputValue,
  inputPlaceholder,
}: InputLabelProps): JSX.Element => {
  return (
    <InputLabelStyled className={wrapperClassName}>
      <label htmlFor={inputId}>{`${labelText}:`}</label>
      <input
        type={inputType}
        id={inputId}
        onChange={inputChangeAction}
        value={inputValue}
        autoComplete="off"
      />
    </InputLabelStyled>
  );
};

export default InputLabel;

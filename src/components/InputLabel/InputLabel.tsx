import InputLabelStyled from "./InputLabelStyled";

interface InputLabelProps {
  label: string;
  type: "text" | "password";
  changeAction?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const InputLabel = ({
  label,
  type,
  placeholder,
  changeAction,
  value,
}: InputLabelProps): JSX.Element => {
  return (
    <InputLabelStyled className="input__wrapper">
      <label className="input__label" htmlFor={label}>
        {`${label}:`}
      </label>
      <input
        className="input__data"
        type={type}
        id={label}
        onChange={changeAction}
        value={value}
      />
    </InputLabelStyled>
  );
};

export default InputLabel;

import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  className?: string;
}

const Button = ({ text, action, className }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={`button ${className}`} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

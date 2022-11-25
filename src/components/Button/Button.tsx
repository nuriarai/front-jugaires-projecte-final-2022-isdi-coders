import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  className?: string;
  isDisabled?: boolean;
  isReversed?: boolean;
  semantic: "button" | "icon";
}

const Button = ({
  text,
  action,
  className,
  isDisabled,
  isReversed,
  semantic = "button",
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={isReversed ? `button--reversed ${className}` : `${className}`}
      onClick={action}
      disabled={isDisabled}
      semantic={semantic}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;

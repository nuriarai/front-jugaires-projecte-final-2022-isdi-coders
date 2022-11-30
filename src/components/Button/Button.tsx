import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  className?: string;
  isDisabled?: boolean;
  isReversed?: boolean;
  ariaLabel?: string;
  semantic?: "button" | "icon";
}

const Button = ({
  text,
  action,
  className,
  isDisabled,
  isReversed,
  ariaLabel,
  semantic = "button",
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      aria-label={ariaLabel}
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

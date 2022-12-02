import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  children?: JSX.Element;
  action?: () => void;
  className?: string;
  isReversed?: boolean;
  ariaLabel?: string;
}

const Button = ({
  text,
  children,
  action,
  className,
  isReversed,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      aria-label={ariaLabel}
      className={isReversed ? `button--reversed ${className}` : `${className}`}
      onClick={action}
    >
      {text} {children}
    </ButtonStyled>
  );
};

export default Button;

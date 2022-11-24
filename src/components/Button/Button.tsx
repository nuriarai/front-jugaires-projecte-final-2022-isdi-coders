import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  className?: string;
  isDisabled?: boolean;
  isReversed?: boolean;
}

const Button = ({
  text,
  action,
  className,
  isDisabled,
  isReversed,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={
        isReversed
          ? `button button--reversed ${className}`
          : `button ${className}`
      }
      onClick={action}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;

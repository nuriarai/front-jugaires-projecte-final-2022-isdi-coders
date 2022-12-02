import { UserRegisterData } from "../../types/types";
import InputLabel from "../InputLabel/InputLabel";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import AccessFormStyled from "../StyledComponents/AccessFormStyled";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import cartes from "../../assets/icons/cartes.svg";

const initialFormData: UserRegisterData = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const { userRegister } = useUser();
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    await userRegister(formDataToSubmit);
  };

  return (
    <AccessFormStyled>
      <form
        className="access access--register"
        onSubmit={(event) => handleSubmit(event)}
      >
        <InputLabel
          labelText="Usuari"
          inputId="username"
          wrapperClassName="access__wrap-input access__wrap-label-input--user"
          inputType="text"
          inputChangeAction={handleFormChange}
        />
        <InputLabel
          labelText="Contrasenya"
          inputId="password"
          wrapperClassName="access__wrap-label-input access__wrap-label-input--password"
          inputType="password"
          inputChangeAction={handleFormChange}
        />
        <InputLabel
          labelText="Email"
          inputId="email"
          wrapperClassName="access__wrap-label-input access__wrap-label-input--email"
          inputType="text"
          inputChangeAction={handleFormChange}
          inputValue={formData.email}
        />
        <Button
          className="button--button"
          text="Registra't"
          isReversed
          action={() => {}}
        />
        <div className="access__link-text">
          Si ja tens compte pots anar a l'
          <Link to="/login" className="access__link access__link--to-login">
            inici de sessió
          </Link>
        </div>
      </form>

      <img
        className="access__image--login"
        src={cartes}
        alt="perfil d'unes cartes a la ma"
      />
    </AccessFormStyled>
  );
};

export default RegisterForm;

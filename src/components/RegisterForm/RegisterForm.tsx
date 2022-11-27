import { UserRegisterData } from "../../types/types";
import InputLabel from "../InputLabel/InputLabel";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import RegisterFormStyled from "./RegisterFormStyled";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

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
    <RegisterFormStyled
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
        labelText="Contrassenya"
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
        className="button button--access button--register"
        text="Registra't"
        semantic="button"
        isReversed
        action={() => {}}
      />
      <div className="access__link-text">
        Si ja tens compte ves a l'<Link to="/">inici de sessió</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;

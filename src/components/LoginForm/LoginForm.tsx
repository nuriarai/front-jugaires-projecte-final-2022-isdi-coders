import { UserCredentialsData } from "../../types/types";
import InputLabel from "../InputLabel/InputLabel";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import AccessFormStyled from "../StyledComponents/AccessFormStyled";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const initialFormData: UserCredentialsData = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const { userLogin } = useUser();
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentialsData = {
      username: formData.username,
      password: formData.password,
    };
    await userLogin(formDataToSubmit);
  };

  return (
    <AccessFormStyled
      className="access access--login"
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
      <Button
        className="button button--access button--register"
        text="Entra"
        semantic="button"
        isReversed
        action={() => {}}
      />
      <div className="access__link-text">
        Si encara no tens compte ves al
        <Link className="access__link access__link--to-register" to="/register">
          registre
        </Link>
      </div>
    </AccessFormStyled>
  );
};

export default LoginForm;

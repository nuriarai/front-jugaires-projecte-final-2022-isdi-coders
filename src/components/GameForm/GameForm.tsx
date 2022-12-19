import React, { useState } from "react";
import useGame from "../../hooks/useGames/useGames";
import { GameBase } from "../../types/gameTypes";
import Button from "../Button/Button";
import AllFormsStyled from "../../styles/formStyles";

const initialFormData: GameBase = {
  owner: "637d14f8ebf9a87c51fcb77f",
  gameBoard: "",
  dateTime: "",
  picture: "",
  pictureBackup: "",
  location: "",
  addressLocation: "",
  minPlayers: 2,
  maxPlayers: 2,
  duration: "",
  observations: "",
};

const NewGameForm = (): JSX.Element => {
  const { createGame } = useGame();
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: GameBase = {
      owner: formData.owner,
      gameBoard: formData.gameBoard,
      dateTime: formData.dateTime,
      location: formData.location,
      addressLocation: formData.addressLocation,
      minPlayers: formData.minPlayers,
      maxPlayers: formData.maxPlayers,
      duration: formData.duration,
      observations: formData.observations,
      picture: formData.picture,
      pictureBackup: formData.picture,
    };

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    await createGame(formDataToSubmit);
  };

  return (
    <AllFormsStyled>
      <form
        className="new-game access--new-game"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="form__wrap-element">
          <label className="form__label" htmlFor="gameBoard">
            Joc:
          </label>
          <select
            className="form__select"
            id="gameBoard"
            onChange={handleOnChange}
          >
            <option value="default">Escull una opció</option>
            <option value="Podrida">Podrida</option>
            <option value="Canasta">Canasta</option>
            <option value="Dòmino">Dòmino</option>
            <option value="Continental">Continental</option>
            <option value="Butifarra">Butifarra</option>
            <option value="Mentider">Mentider (daus)</option>
          </select>
        </div>
        <div className="form__wrap-element">
          <label className="form__label" htmlFor="dateTime">
            Data i hora de la partida:
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            value={formData.dateTime}
            onChange={handleOnChange}
          />
        </div>
        <div className="form__wrap-element" hidden>
          <label className="form__label" htmlFor="picture-file">
            Imatge:
          </label>
          <input
            type="file"
            id="picture-file"
            value=""
            onChange={handleOnChange}
          />
        </div>

        <div className="form__wrap-element">
          <label className="form__label" htmlFor="picture">
            Imatge de la partida:
          </label>
          <input
            type="text"
            id="picture"
            value={formData.picture}
            onChange={handleOnChange}
          />
        </div>

        <div className="form__wrap-element">
          <label className="form__label" htmlFor="location">
            Lloc on es farà la partida:
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleOnChange}
          />
        </div>
        <div className="form__wrap-element">
          <label className="form__label" htmlFor="addressLocation">
            Adreça del lloc:
          </label>
          <input
            type="text"
            id="addressLocation"
            value={formData.addressLocation}
            onChange={handleOnChange}
          />
        </div>
        <div className="form__wrap-element">
          <label className="form__label" htmlFor="minPlayers">
            Número mínim de persones:
          </label>
          <input
            type="number"
            id="minPlayers"
            min={2}
            max={6}
            value={formData.minPlayers}
            onChange={handleOnChange}
          />
        </div>

        <div className="form__wrap-element">
          <label className="form__label" htmlFor="maxPlayers">
            Número màxim de persones:
          </label>
          <input
            type="number"
            id="maxPlayers"
            min={2}
            max={12}
            value={formData.maxPlayers}
            onChange={handleOnChange}
          />
        </div>
        <div className="form__wrap-element">
          <label className="form__label" htmlFor="duration">
            Durada aproximada:
          </label>
          <input
            type="text"
            id="duration"
            value={formData.duration}
            onChange={handleOnChange}
          />
        </div>
        <div className="form__wrap-select">
          <label className="form__label" htmlFor="observations">
            Observacions:
          </label>
          <textarea
            id="observations"
            onChange={handleOnChange}
            value={formData.observations}
          ></textarea>
        </div>

        <Button
          className="button--button"
          text="Desa la partida"
          isReversed
          action={() => {}}
        />
      </form>
    </AllFormsStyled>
  );
};

export default NewGameForm;

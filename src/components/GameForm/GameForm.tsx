import React, { useState } from "react";
import useGame from "../../hooks/useGames/useGames";
import { GameBase } from "../../types/gameTypes";
import Button from "../Button/Button";
import AllFormsStyled from "../../styles/formStyles";

const initialFormData: GameBase = {
  owner: "637d14f8ebf9a87c51fcb77f",
  gameBoard: "",
  dateTime: "",
  picture:
    "https://s1.eestatic.com/2021/09/04/ocio/609450308_205727591_1706x960.jpg",
  pictureBackup:
    "https://s1.eestatic.com/2021/09/04/ocio/609450308_205727591_1706x960.jpg",
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
      pictureBackup: formData.pictureBackup,
    };
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    await createGame(formDataToSubmit);
    //todo: only reset form if no error
    setFormData(initialFormData);
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
            <option value="podrida">Podrida</option>
            <option value="canasta">Canasta</option>
            <option value="domino">Dòmino</option>
            <option value="continental">Continental</option>
            <option value="butifarra">Butifarra</option>
            <option value="mentider-daus">Mentider (daus)</option>
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
        <div className="form__wrap-element">
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

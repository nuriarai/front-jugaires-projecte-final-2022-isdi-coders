import NewGameForm from "../../components/GameForm/GameForm";

const NewGameFormPage = (): JSX.Element => {
  return (
    <>
      <h1 className="page__title">Nova partida</h1>
      <NewGameForm />
    </>
  );
};

export default NewGameFormPage;

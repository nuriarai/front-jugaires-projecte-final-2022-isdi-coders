import { useAppSelector } from "./redux/hooks";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Loading from "./components/Loading/Loading";

const App = () => {
  const {
    isLoading,
    modal: { isOpen, message, modalType },
  } = useAppSelector(({ ui }) => ui);

  return (
    <>
      {isLoading && <Loading />}
      {isOpen && <Modal message={message} modalType={modalType} />}
      <Layout />
    </>
  );
};

export default App;

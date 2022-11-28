import { useAppSelector } from "./redux/hooks";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";

const App = () => {
  const {
    modal: { isOpen, message, modalType },
  } = useAppSelector(({ ui }) => ui);
  return (
    <>
      {isOpen && <Modal message={message} modalType={modalType} />}
      <Layout />
    </>
  );
};

export default App;

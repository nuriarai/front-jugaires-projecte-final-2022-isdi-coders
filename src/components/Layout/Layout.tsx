import { Routes, Route } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <main>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<p>Camí no resolt</p>} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;

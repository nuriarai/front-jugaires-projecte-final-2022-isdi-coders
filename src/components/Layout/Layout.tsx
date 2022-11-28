import { Routes, Route } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <main>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;

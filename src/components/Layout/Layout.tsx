import { Routes, Route } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import GamesPage from "../../pages/GamesPage/GamesPage";
import Header from "../Header/Header";
import NewGameFormPage from "../../pages/NewGamePage/NewGamePage";
import DetailGamePage from "../../pages/DetailGamePage/DetailGamePage";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/partides" element={<GamesPage />} />
          <Route path="/partida/:id" element={<DetailGamePage />} />
          <Route path="/nova-partida" element={<NewGameFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </LayoutStyled>
  );
};

export default Layout;

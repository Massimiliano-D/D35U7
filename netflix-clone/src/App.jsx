import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import FilmListPiangina from "./components/FilmListPiangina";
import Title from "./components/Title";
import FilmListAnelli from "./components/FilmListAnelli";
import FilmListPercy from "./components/FilmListPercy";

function App() {
  return (
    <div className="bg-dark">
      <CustomNavbar />
      <Title />
      <FilmListPiangina />
      <FilmListAnelli />
      <FilmListPercy />
      <Footer />
    </div>
  );
}

export default App;

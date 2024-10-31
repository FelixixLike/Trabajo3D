import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ExperienceCompleta from "./Completa/ExperienceCompleta";
import ExperienceSeparada from "./Separada/ExperienceSeparada";
import './styles.css';

const PopupButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button className="popup-button" onClick={togglePopup}>
        ?
      </button>
      {showPopup && (
        <div className="popup">
          <p>
            Ana María Pardo Macea<br />
            Erika Paola Perdomo Cortes<br />
            Zharick Natalia Cifuentes Herrera <br />
          </p>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={
        <div className="container">
          <h1>OPTIMIZACIÓN DEL PROCESO DE FABRICACIÓN DE DONAS PARA UNA
          PRODUCCIÓN SEMI-INDUSTRIAL</h1>
          <div className="button-container">
            <Link to="/Separada">
              <button className="btn">Ir a Separada</button>
            </Link>
            <Link to="/Completa">
              <button className="btn">Ir a Completa</button>
            </Link>
          </div>
          <PopupButton />
        </div>
      } />
      <Route path="/Separada" element={<ExperienceSeparada />} />
      <Route path="/Completa" element={<ExperienceCompleta />} />
    </Routes>
  </Router>
);

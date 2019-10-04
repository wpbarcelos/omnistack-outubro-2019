import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa
        </p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Seu email" />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

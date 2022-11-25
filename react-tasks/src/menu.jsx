import React from 'react'
import { Link } from "react-router-dom";
import "./menu.css";
export default function Menu () {
  return (
    <div>
      <h1>Principal</h1>
      <nav className="container">
        <Link to="/Menu" className="navLi">
          Home
        </Link>
        <br />
        <Link to="/Inicio" className="navLi">
          Tareas
        </Link>
        <br />
        <Link to="/SobreNosotros" className="navLi">
          Sobre Nosotros
        </Link>
      </nav>
    </div>
  );
}

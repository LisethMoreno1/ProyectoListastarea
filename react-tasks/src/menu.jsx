import React from 'react'
import { Link } from "react-router-dom";
export default function Menu () {
  return (
    <div>
      <nav>
        <h1>Principal</h1>
        <Link to="/" className="navLi">
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

import React from 'react'

export default function SobreNosotros() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sobre Nosotros</h1>
      <h3 style={{ color: "black", textAlign: "center" }}>Mi lista de Tarea</h3>
      <hr />
      <p style={{ color: "black" }}>
        Mi Lista de tarea es un sistema que pretente ayudarte en procesos
        rutinarios los cual deseas agendar para recordar en el futuro.
        <br />
        Es un sistema que pretende ser interactivo con el usuario para asi
        facilitar la experiencia de el usuario con una bonita interfaz.{" "}
      </p>
      <ul style={{ color: "black" }}>
        Cararteristicas que ofrece:
        <br />
        <li>Crear Tareas sin limites</li>
        <li>Buscar Tareas que hayas realizado</li>
        <li>Tachar tareas Realizadas</li>
        <li>Eliminar tareas</li>
        <li>Y más Actualizaciones en el Furuto</li>
      </ul>

      <ul>
        <li>Lenguaje : Javascript y React</li>
        <li> Libreria : sweetalert2 </li>
        <li>Icon :Reac Icon</li>
      </ul>
      <p style={{ color: "black", textAlign: "center" }}>
        Desarrollador : Liseth Moreno
      </p>

      <p style={{ textAlign: "center" }}>Redes Sociales</p>
      <a
        href="https://github.com/LisethMoreno1"
        style={{ color: "black", textAlign: "center" }}
      >
        GITHUB
      </a>
    </>
  );
}

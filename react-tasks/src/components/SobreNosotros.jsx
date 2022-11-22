import React from 'react'
import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";  
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
export default function SobreNosotros() {
  return (
    <>
      <Heading>Sobre nosotros</Heading>
      <Heading as="h4" size="md" style={{ textAlign: "center" }}>
        Mi lista de Tarea
      </Heading>
      <h1 style={{ textAlign: "center" }}>Sobre Nosotros</h1>
      <h3 style={{ color: "black", textAlign: "center" }}>Mi lista de Tarea</h3>
      <hr />
      <p>
        Mi Lista de tarea es un sistema que pretente ayudarte en procesos
        rutinarios los cual deseas agendar para recordar en el futuro.
        <br />
        Es un sistema que pretende ser interactivo con el usuario para asi
        facilitar la experiencia de el usuario con una bonita interfaz.{" "}
      </p>
      <br />
      <List spacing={3}>
        <p>Funciones que puedes encontrar</p>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Crear Tareas sin limites
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Buscar Tareas que hayas realizado
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Eliminar tareas
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdSettings} color="green.500" />Y más Actualizaciones en
          el Furuto
        </ListItem>
      </List>

      <br />
      <hr />
      <div>
        <p>Desarrollador : Liseth Moreno</p>
        <p>
          Redes Sociales
          <a href="https://github.com/LisethMoreno1">
            <AiFillGithub />
            Github
          </a>
        </p>
      </div>
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

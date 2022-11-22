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
    </>
  );
}

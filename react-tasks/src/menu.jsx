import React from 'react'
import { Link } from "react-router-dom";
import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";




export default function Menu () {
  const theme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
    },
  });


  return (
    <ChakraProvider theme={theme}>
      <div>
        <Heading style={{ textAlign: "center" }}>Principal</Heading>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
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
    </ChakraProvider>
  );
}

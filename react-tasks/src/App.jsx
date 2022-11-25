import "./styles/app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./menu";
import Inicio from "./components/inicio";
import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";  



export function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />

            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Inicio" element={<Inicio />} />
          </Routes>
        </BrowserRouter>


  const theme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
    },
  });

  return (
    <>
      <div>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/SobreNosotros" element={<SobreNosotros />} />
              <Route path="/Inicio" element={<Inicio />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>

      </div>
    </>
  );
}

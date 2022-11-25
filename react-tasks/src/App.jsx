import "./styles/app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./menu";
import Inicio from "./components/inicio";

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
      </div>
    </>
  );
}

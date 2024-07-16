import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import PaginaBase from "./pages/paginaBase";
import Concluido from "./pages/concluido";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="concluido" element={<Concluido />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

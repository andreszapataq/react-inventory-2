import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrimaryLayout from "./layout/PrimaryLayout"
import SecondaryLayout from "./layout/SecondaryLayout"
import Bodegas from "./pages/Bodegas"
import Bodega from "./pages/Bodega"
import Lotes from "./pages/Lotes"
import Lote from "./pages/Lote"
import Despacho from "./pages/Despacho";
import Despachos from "./pages/Despachos";
import Remision from "./components/Remision/Remision";

import {INVENTARIO_PRINCIPAL,
        INVENTARIO_SAN_JOSE_SAN_JOSE,
        INVENTARIO_SAN_JOSE_MEGATECNOLOGIA
} from './data'

function App() {
  const inventarios = [
    INVENTARIO_PRINCIPAL,
    INVENTARIO_SAN_JOSE_SAN_JOSE,
    INVENTARIO_SAN_JOSE_MEGATECNOLOGIA
  ]

  return (
    <Router basename={`${process.env.NODE_ENV === 'production' ? '/bodegas' : ''}`}>
      <Routes>
        <Route element={<PrimaryLayout clientes={inventarios} />}>
          <Route path="/" element={<Bodegas bodegas={inventarios} />} />
          <Route path="/bodega/:id" element={<Bodega />} />
          <Route path="/lotes/:id" element={<Lotes />} />
          <Route path="/despachos" element={<Despachos />} />
        </Route>
        <Route element={<SecondaryLayout />}>
          <Route path="/lote/:id" element={<Lote bodegas={inventarios} />} />
        </Route>
        <Route path="/despacho/:id" element={<Despacho />} />
        <Route path="/pdf" element={<Remision />} />
      </Routes>
    </Router>
  );
}

export default App;
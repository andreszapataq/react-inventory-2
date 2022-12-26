import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrimaryLayout from "./layout/PrimaryLayout"
import SecondaryLayout from "./layout/SecondaryLayout"
import Bodegas from "./pages/Bodegas"
import Bodega from "./pages/Bodega"
import Lotes from "./pages/Lotes"
import Lote from "./pages/Lote"

import {BODEGAS, INVENTARIO, LOTES, CLIENTES} from './data'

function App() {
  return (
    <Router basename={`${process.env.NODE_ENV === 'production' ? '/bodegas' : ''}`}>
      <Routes>
        <Route element={<PrimaryLayout clientes={CLIENTES} />}>
          <Route path="/" element={<Bodegas bodegas={BODEGAS} />} />
          <Route path="/bodega/:id" element={<Bodega inventario={INVENTARIO} />} />
          <Route path="/lotes/:id" element={<Lotes lotes={LOTES} />} />
        </Route>
        <Route element={<SecondaryLayout />}>
          <Route path="/lote/:id" element={<Lote bodegas={BODEGAS} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
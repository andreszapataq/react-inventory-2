import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import Bodegas from "./pages/Bodegas";
import Bodega from "./pages/Bodega"
import Lotes from "./pages/Lotes"
import Lote from "./pages/Lote"

import {BODEGAS} from './data'
import {INVENTARIO} from './data'
import {LOTES} from './data'

function App() {
  return (
    <Router basename={`${process.env.NODE_ENV === 'production' ? '/bodegas' : ''}`}>
      <div className="flex flex-col items-center">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Bodegas bodegas={BODEGAS} />} />
          <Route path="/bodega/:id" element={<Bodega inventario={INVENTARIO} />} />
          <Route path="/lotes/:id" element={<Lotes lotes={LOTES} />} />
          <Route path="/lote/:id" element={<Lote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
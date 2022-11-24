import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import Bodegas from "./pages/Bodegas";
import Bodega from "./pages/Bodega"

import {BODEGAS} from './data'
import {REFERENCIAS} from './data'

function App() {
  return (
    <Router basename={`${process.env.NODE_ENV === 'production' ? '/bodegas' : ''}`}>
      <div className="flex flex-col items-center">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Bodegas bodegas={BODEGAS} />} />
          <Route path="/bodega/:id" element={<Bodega referencias={REFERENCIAS} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
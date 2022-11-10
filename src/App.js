import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import ItemContainer from "./components/ItemContainer"

function App() {
  const BODEGAS = [
    {
      nombre: 'Principal',
      cliente: 'Vive Solutions - 900274934'
    },
    {
      nombre: 'Hospital San José',
      cliente: 'Hospital San José de Popayán E.S.E. - 891580002'
    },
    {
      nombre: 'Hospital San José',
      cliente: 'Megatecnología y Rehabilitación Colombiana - 900094992'
    }
  ]
  
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SearchBar />
      <ItemContainer data={BODEGAS} />
    </div>
  );
}

export default App;

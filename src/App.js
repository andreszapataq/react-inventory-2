import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import BodegaRow from "./components/BodegaRow";

function App() {
  return (
    <div className="App flex-column">
      <Header />
      <SearchBar />
      <BodegaRow />
    </div>
  );
}

export default App;

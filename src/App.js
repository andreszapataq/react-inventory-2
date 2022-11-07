import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import ItemContainer from "./components/ItemContainer"

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SearchBar />
      <ItemContainer />
    </div>
  );
}

export default App;

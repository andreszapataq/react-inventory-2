import Header from "./layout/Header";
import SearchBar from "./components/SearchBar";
import ItemContainer from "./components/ItemContainer";

import {BODEGAS} from './data'

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SearchBar />
      <ItemContainer data={BODEGAS} />
    </div>
  );
}

export default App;

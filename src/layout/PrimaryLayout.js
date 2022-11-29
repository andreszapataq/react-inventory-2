import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const PrimaryLayout = () => {
  return (
    <div className="flex flex-col items-center">
        <Header />
        <SearchBar />
        <Outlet />
    </div>
  )
}

export default PrimaryLayout
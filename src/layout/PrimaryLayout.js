import { Outlet } from "react-router-dom";

import HeaderPrimary from "../components/HeaderPrimary";
import SearchBar from "../components/SearchBar";

const PrimaryLayout = () => {
  return (
    <div className="flex flex-col items-center">
        <HeaderPrimary />
        <SearchBar />
        <Outlet />
    </div>
  )
}

export default PrimaryLayout
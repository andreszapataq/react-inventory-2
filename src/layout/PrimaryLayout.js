import { Outlet } from "react-router-dom";

import HeaderPrimary from "../components/HeaderPrimary";
import SearchBar from "../components/SearchBar";

const PrimaryLayout = ({clientes}) => {
  return (
    <div className="flex flex-col items-center">
        <HeaderPrimary clientes={clientes} />
        <SearchBar />
        <Outlet />
    </div>
  )
}

export default PrimaryLayout
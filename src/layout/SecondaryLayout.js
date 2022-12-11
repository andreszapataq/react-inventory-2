import { Outlet } from "react-router-dom"
import HeaderLote from "../components/HeaderLote"

const SecondaryLayout = () => {
  return (
    <div className="flex flex-col gap-14 p-8">
      <HeaderLote />
      <Outlet />
    </div>
  )
}

export default SecondaryLayout
import { Outlet } from "react-router-dom"
import HeaderSecondary from "../components/HeaderSecondary"

const SecondaryLayout = () => {
  return (
    <div className="flex flex-col gap-14 p-8">
      <HeaderSecondary />
      <Outlet />
    </div>
  )
}

export default SecondaryLayout
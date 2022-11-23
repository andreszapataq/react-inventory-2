import { useLocation } from "react-router-dom"

const Header = () => {
  let location = useLocation()
  
  return (
    <div className="w-4/5 lg:w-1/2 flex justify-center py-12">
      {location.pathname === "/" && (
        <div>
          <h1 className="text-3xl font-semibold">Bodegas</h1>
        </div>
      )}
      {location.pathname.includes('/bodega/') && (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Hospital</h1>
          <p className="text-xl">Bodega</p>
        </div>
      )}
    </div>
  )
}

export default Header
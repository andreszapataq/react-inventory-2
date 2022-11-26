import { useLocation } from "react-router-dom"

const Header = () => {
  let location = useLocation()
  const bodega = location.state?.bodega?.nombre
  const cliente = location.state?.bodega?.cliente
  const nombre = location.state?.referencia?.nombre
  const codigo = location.state?.referencia?.codigo
  
  return (
    <div className="w-4/5 lg:w-1/2 flex flex-col items-center">
      {location.pathname === "/" && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <p></p>
          <h1 className="text-3xl font-semibold">Bodegas</h1>
          <p></p>
        </div>
      )}
      {location.pathname.includes('/bodega/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <p></p>
          <h1 className="text-3xl font-semibold">{bodega}</h1>
          <p className="text-xl">{cliente}</p>
        </div>
      )}
      {location.pathname.includes('/lotes/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <p></p>
          <h1 className="text-3xl font-semibold">{nombre}</h1>
          <p className="text-xl">{codigo}</p>
        </div>
      )}
    </div>
  )
}

export default Header
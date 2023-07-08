import { useLocation } from "react-router-dom"

const ItemRow = ({referencia, lote}) => {
  let location = useLocation()

  return (
    <div>
      {location.pathname.includes('/bodega') && (
        <div className="flex justify-between items-center bg-cultured rounded-lg px-8 py-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold">{referencia.nombre}</h2>
            <p className="text-xs font-light">{referencia.codigo}</p>
          </div>
          <div className="flex justify-end items-center">
            <div className="h-12 w-px bg-green-300 mr-8"></div>
            <div className="flex flex-col items-center w-16">
              <p className="text-xl font-semibold">{referencia.cantidad}</p>
              <p className="text-xs font-light">Unidades</p>
            </div>
          </div>
        </div>
      )}
      {location.pathname.includes('/lotes') && (
        <div className="flex justify-between items-center bg-cultured rounded-lg px-8 py-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold">{lote.lote}</h2>
            <p></p>
          </div>
          <div className="flex justify-end items-center">
            <div className="h-12 w-px bg-carrot-orange mr-8"></div>
            <div className="flex flex-col items-center w-16">
              <p className="text-xs font-light">{lote.fecha_vencimiento}</p>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemRow
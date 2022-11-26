import { useLocation } from "react-router-dom"

const ItemRow = ({referencia}) => {
  let location = useLocation()

  return (
    <div className="flex justify-between bg-cultured rounded-lg px-8 py-4 mb-4">
      <div>
        <h2 className="text-lg font-semibold">{referencia.nombre}</h2>
        <p className="text-xs font-light">{referencia.codigo}</p>
      </div>
      <div className="flex flex-col items-center border-solid border-l border-light-gray pl-8">
        <p className="text-xl font-semibold">{referencia.cantidad}</p>
        <p className="text-xs font-light">Unidades</p>
      </div>
    </div>
  )
}

export default ItemRow
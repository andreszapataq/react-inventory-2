import { useLocation } from "react-router-dom"

import HeaderDespacho from "../components/HeaderDespacho"
import SearchBar from "../components/SearchBar"
import ResumenCard from "../components/ResumenCard"
import DespachoRow from "../components/DespachoRow"

function Despacho() {
  let location = useLocation()

  const {nombre_bodega = "", cliente = "", id_number = "", stock = ""} = location.state?.bodega || {}

  console.log(location.state?.bodega)

  const newStock = stock.map(item => {
    return item.lotes.map(lote => {
      return {
        codigo: item.codigo,
        nombre: item.nombre,
        lote: lote.lote,
        fecha_vencimiento: lote.fecha_vencimiento
      }
    })
  }).flat()

  console.log(newStock)

  return (
    <div className="flex flex-col gap-11 p-10">
      <HeaderDespacho nombre_bodega={nombre_bodega} cliente={cliente} id_number={id_number} />
      <div className="w-full h-px bg-cadet-blue-crayola"></div>
      <div className="flex justify-between">
        <div className="w-2/3 flex flex-col">
          <SearchBar />
          {newStock.map((item, index) => (
            <DespachoRow key={index} item={item} />
          ))}
        </div>
        <div className="w-1/3 flex flex-col items-end">
          <ResumenCard />
        </div>
      </div>
    </div>
  )
}

export default Despacho
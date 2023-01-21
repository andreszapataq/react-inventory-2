import { useLocation } from "react-router-dom"
import {FaBoxOpen} from 'react-icons/fa'

const HeaderSecondary = () => {
  let location = useLocation()

  const lote = location.state?.lote?.lote
  const fecha_vencimiento = location.state?.lote?.fecha_vencimiento
  const {nombre = "", codigo = ""} = location.state?.referencia || {}

  return (
    <div className="grid grid-rows-3">
      <h1 className="text-3xl font-semibold">{lote}</h1>
      <p className="text-xl">{fecha_vencimiento}</p>
      <div>
        <div className="flex">
          <FaBoxOpen className="fill-raisin-black mr-2" />
          <p className="text-xs text-raisin-black"><span className="font-light">Referencia actual: </span>{nombre} - {codigo}</p>
        </div>
        <div className="w-full h-px bg-cadet-blue-crayola mt-5"></div>
      </div>
    </div>
  )
}

export default HeaderSecondary
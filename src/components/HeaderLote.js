import { useLocation } from "react-router-dom"
import {FaBoxOpen} from 'react-icons/fa'

const HeaderLote = () => {
  let location = useLocation()
  const lote = location.state?.lote?.lote
  const fecha_vencimiento = location.state?.lote?.fecha_vencimiento

  return (
    <div className="grid grid-rows-3">
        <h1 className="text-3xl font-semibold">{lote}</h1>
        <p className="text-xl">{fecha_vencimiento}</p>
        <div>
          <div className="flex">
            <FaBoxOpen className="fill-raisin-black mr-2" />
            <p className="text-xs text-raisin-black"><span className="font-light">Referencia actual: </span>DBM Putty 5.00 CC - AT679FD</p>
          </div>
          <div className="w-full h-px bg-cadet-blue-crayola mt-5"></div>
        </div>
    </div>
  )
}

export default HeaderLote
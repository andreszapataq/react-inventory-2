import { useNavigate, useLocation } from "react-router-dom"

import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"
import Button from "../components/Button"

function Lote({bodegas}) {
  const navigate = useNavigate()
  let location = useLocation()

  const {nombre_bodega = "", cliente = "", id_number = ""} = location.state?.bodega || {}

  return (
    <div className="flex flex-col gap-14">
      <div>
        <h2 className="text-2xl font-medium mb-3">Bodega actual</h2>
        <p className="text-lg font-semibold">{nombre_bodega}</p>
        <p className="text-xs font-light">{cliente} - {id_number}</p>
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-3">Trasladar a</h2>
        <DropdownSearch bodegas={bodegas} label="Seleccionar bodega" />
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-3">Notas</h2>
        <textarea name="notes" id="notes" className="resize-none w-[461px] h-[104px] p-2 border border-cadet-blue-crayola rounded-lg text-sm font-light"></textarea>
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-3">Registro</h2>
        <LoteLog />
      </div>
      <div className="w-[461px] flex justify-end gap-3 mt-10">
        <Button variant="cancel" label="Cancelar" onClick={() => navigate(-1)} />
        <Button variant="confirm" label="Guardar" />
      </div>
    </div>
  )
}

export default Lote
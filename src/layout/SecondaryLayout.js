import HeaderLote from "../components/HeaderLote"
import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"
import Button from "../components/Button"

const SecondaryLayout = () => {
  return (
    <div className="p-8">
      <div className="grid grid-flow-row auto-rows-max gap-14">
        <HeaderLote />
        <div>
          <h2 className="text-2xl font-medium mb-3">Bodega actual</h2>
          <p className="text-lg font-semibold">Hospital San José</p>
          <p className="text-xs font-light">Hospital San José de Popayán E.S.E. - 891580002</p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-3">Trasladar a</h2>
          <DropdownSearch />
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-3">Notas</h2>
          <textarea name="notes" id="notes" className="resize-none w-[461px] h-[104px] px-2 py-1 border border-cadet-blue-crayola rounded-lg text-sm font-light"></textarea>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-3">Registro</h2>
          <LoteLog />
        </div>
        <div className="w-[461px] flex gap-4 mt-10">
          <Button variant="cancel" label="Cancelar" />
          <Button variant="confirm" label="Guardar" />
        </div>
      </div>
    </div>
  )
}

export default SecondaryLayout
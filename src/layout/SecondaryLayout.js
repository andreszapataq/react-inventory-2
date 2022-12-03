import HeaderLote from "../components/HeaderLote"
import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"
import Button from "../components/Button"

const SecondaryLayout = () => {
  return (
    <div className="p-8">
      <div className="grid grid-flow-row auto-rows-max gap-11">
        <HeaderLote />
        <div>
          <h2 className="text-2xl font-medium">Bodega actual</h2>
          <p className="text-lg font-semibold">Hospital San José</p>
          <p className="text-xs font-light">Hospital San José de Popayán E.S.E. - 891580002</p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Trasladar a</h2>
          <DropdownSearch />
        </div>
        <div>
          <h2 className="text-2xl font-medium">Notas</h2>
          <textarea name="notes" id="notes" className="resize-none w-[461px] h-[104px] px-2 py-1 border border-cadet-blue-crayola rounded-lg"></textarea>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Registro</h2>
          <LoteLog />
        </div>
        <div>
          <Button variant="cancel" />
          <Button variant="save" />
        </div>
      </div>
    </div>
  )
}

export default SecondaryLayout
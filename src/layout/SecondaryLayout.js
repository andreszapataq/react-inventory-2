import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"

const SecondaryLayout = () => {
  return (
    <div className="p-8">
      <div>
      <h1 className="text-3xl font-semibold">Lote No.</h1>
      <p className="text-xl">Fecha de Vencimiento</p>
      <div className="w-full h-px bg-cadet-blue-crayola mr-8"></div>
      </div>
      <div className="grid grid-rows-5 gap-11">
        <div>
          <p>Bodega actual</p>
        </div>
        <div>
          <p>Trasladar a</p>
          <DropdownSearch />
        </div>
        <div>
          <p>Notas</p>
          <textarea name="notes" id="notes" className="resize-none w-[461px] h-[104px] px-2 py-1 border border-cadet-blue-crayola rounded-lg"></textarea>
        </div>
        <div>
          <p>Registro</p>
          <LoteLog />
        </div>
        <div>
          Buttons
        </div>
      </div>
    </div>
  )
}

export default SecondaryLayout
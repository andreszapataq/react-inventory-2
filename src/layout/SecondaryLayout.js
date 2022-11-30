import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"

const SecondaryLayout = () => {
  return (
    <div>
      <div>
        <p>Bodega actual</p>
      </div>
      <div>
        <p>Trasladar a</p>
        <DropdownSearch />
      </div>
      <div>
        <p>Notas</p>
        <textarea name="notes" id="notes" className="resize-none w-[461px] h-[104px] border border-cadet-blue-crayola rounded-lg"></textarea>
      </div>
      <div>
        <p>Registro</p>
        <LoteLog />
      </div>
    </div>
  )
}

export default SecondaryLayout
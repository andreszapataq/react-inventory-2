import DropdownSearch from "../components/DropdownSearch"
import LoteLog from "../components/LoteLog"

const SecondaryLayout = () => {
  return (
    <div>
      <DropdownSearch />
      <div>
        <p>Notas</p>
        <textarea name="notes" id="notes" className="max-w-md border border-cadet-blue-crayola rounded-lg"></textarea>
      </div>
      <LoteLog />
    </div>
  )
}

export default SecondaryLayout
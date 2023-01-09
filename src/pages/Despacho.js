import HeaderDespacho from "../components/HeaderDespacho"
import SearchBar from "../components/SearchBar"
import ResumenCard from "../components/ResumenCard"
import DespachoRow from "../components/DespachoRow"

function Despacho() {
  return (
    <div className="flex flex-col gap-11 p-10">
      <HeaderDespacho />
      <div className="w-full h-px bg-cadet-blue-crayola"></div>
      <div className="flex justify-between">
        <div className="w-2/3 flex flex-col">
          <SearchBar />
          <DespachoRow />
        </div>
        <div className="w-1/3 flex flex-col items-end">
          <ResumenCard />
        </div>
      </div>
    </div>
  )
}

export default Despacho
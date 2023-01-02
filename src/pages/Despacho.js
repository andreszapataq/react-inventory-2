import HeaderDespacho from "../components/HeaderDespacho"
import ResumenCard from "../components/ResumenCard"

function Despacho() {
  return (
    <div className="flex flex-col gap-14 p-10">
      <HeaderDespacho />
      <div className="flex justify-between">
        <div className="w-3/4">
          Buscador de lotes
        </div>
        <ResumenCard />
      </div>
    </div>
  )
}

export default Despacho
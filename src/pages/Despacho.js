import HeaderDespacho from "../components/HeaderDespacho"
import ResumenCard from "../components/ResumenCard"

function Despacho() {
  return (
    <div className="flex flex-col gap-14 p-8">
      <HeaderDespacho />
      <div className="flex justify-between">
        <div>
          Buscador de lotes
        </div>
        <ResumenCard />
      </div>
    </div>
  )
}

export default Despacho
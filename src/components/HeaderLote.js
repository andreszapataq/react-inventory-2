import { useLocation } from "react-router-dom"

const HeaderLote = () => {
  let location = useLocation()
  const lote = location.state?.lote?.lote
  const fecha_vencimiento = location.state?.lote?.fecha_vencimiento

  return (
    <div>
        <h1 className="text-3xl font-semibold">{lote}</h1>
        <p className="text-xl">{fecha_vencimiento}</p>
        <div className="w-full h-px bg-cadet-blue-crayola mt-5"></div>
    </div>
  )
}

export default HeaderLote
import { FaTimes } from "react-icons/fa"

const ResumenRow = ({item}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xs font-medium">{item.nombre} - {item.codigo}</p>
        <p className="text-[9px] font-light">{item.fecha_vencimiento}</p>
      </div>
      <p className="text-[9px]">{item.lote}</p>
      <FaTimes size={12} className="fill-cool-grey cursor-pointer" />
    </div>
  )
}

export default ResumenRow
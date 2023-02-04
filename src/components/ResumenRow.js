import { useState } from "react"
import { FaTimes } from "react-icons/fa"

const ResumenRow = ({item, onSelect, onCheck}) => {
  const [check, setCheck] = useState(false)

  const handleClick = () => {
    onCheck()
    setCheck(!check)
  }

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xs font-medium">{item.nombre} - {item.codigo}</p>
        <p className="text-[9px] font-light">{item.fecha_vencimiento}</p>
      </div>
      <p className="text-[9px]">{item.lote}</p>
      <FaTimes size={12} className="fill-cool-grey cursor-pointer" onClick={() => {
        handleClick()
        onSelect(item)}} />
    </div>
  )
}

export default ResumenRow
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"

const DespachoRow = ({item, onSelect, onCheck}) => {
  const [check, setCheck] = useState(false)

  const handleClick = () => {
    onCheck()
    setCheck(!check)
  }

  return (
    <div className="w-3/5 flex justify-between items-center bg-cultured rounded-lg pl-8 pr-4 py-4 mb-4 cursor-pointer" onClick={() => {
      handleClick()
      onSelect(item)}}>
      <div>
        <h2 className="text-lg font-semibold">{item.lote}</h2>
        <p className="text-xs font-light">{item.nombre} - {item.codigo}</p>
      </div>
      <div className="flex justify-end items-center">
        <div className="h-12 w-px bg-green-300 mr-8"></div>
        <p className="text-xs font-light">{item.fecha_vencimiento}</p>
        {check ? <FaCheckCircle size={13} className="self-start fill-raisin-black" /> : <div className="w-[13px] h-[13px] self-start rounded-full border border-cool-grey"></div>}
      </div>
    </div>
  )
}

export default DespachoRow
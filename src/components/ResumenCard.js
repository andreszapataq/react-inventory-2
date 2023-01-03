import { FaRegShareSquare } from "react-icons/fa"
import { MdIosShare } from "react-icons/md"

import Button from "./Button"

const ResumenCard = () => {
  return (
    <div className="w-[428px] h-[569px] flex flex-col justify-between border rounded-lg shadow-lg p-4">
      <div className="grid gap-3 grid-rows-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Resumen</h1>
          <p className="text-[9px]">29 diciembre 2022</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs"><span className="font-semibold">Cliente: </span>Implameq S.A.S.</p>
          <div className="flex justify-between items-center">
            <p className="text-xs"><span className="font-semibold">Ciudad: </span>Cali</p>
            {/* <FaRegShareSquare className="cursor-pointer" /> */}
            <MdIosShare className="fill-[#bfbfbf] cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-px bg-cadet-blue-crayola mt-1"></div>
      </div>
      <div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="cancel" label="Cancelar" />
        <Button variant="confirm" label="Guardar" />
      </div>
    </div>
  )
}

export default ResumenCard
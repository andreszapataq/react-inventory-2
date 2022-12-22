import { FaTimesCircle } from "react-icons/fa"

import DropdownSearch from "./DropdownSearch"
import Button from "./Button"

const Modal = ({toggleModal}) => {
  return (
    <div className="modal">
      <div className="flex flex-col gap-7 w-[412px] h-[452px] border-2 border-black bg-white p-5 rounded-lg">
        <div className="flex justify-end">
            <FaTimesCircle className="cursor-pointer" onClick={toggleModal} />
        </div>
        <h2 className="text-2xl font-semibold">Crear bodega</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">Nombre</h3>
          <input type="text" className="w-[346px] h-[38px] px-2 py-1 border border-cadet-blue-crayola rounded-lg" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Cliente</h3>
          <DropdownSearch />
        </div>
        <div className="w-[346px] flex justify-end gap-4 mt-10">
          <Button variant="cancel" label="Cancelar" />
          <Button variant="confirm" label="Crear bodega" />
        </div>
      </div>
    </div>
  )
}

export default Modal
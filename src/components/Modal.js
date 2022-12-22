import { FaTimesCircle } from "react-icons/fa"

import DropdownSearch from "./DropdownSearch"
import Button from "./Button"

const Modal = ({toggleModal}) => {
  return (
    <div className="modal">
      <div className="flex flex-col gap-5 w-[412px] h-[452px] bg-white p-5">
        <div className="flex justify-end">
            <FaTimesCircle className="cursor-pointer" onClick={toggleModal} />
        </div>
        <h2 className="text-2xl font-semibold">Crear bodega</h2>
        <div>
          <h3 className="text-lg font-semibold">Nombre</h3>
          <input type="text" className="border" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Cliente</h3>
          <DropdownSearch />
        </div>
        <div>
          <Button variant="cancel" label="Cancelar" />
          <Button variant="confirm" label="Crear bodega" />
        </div>
      </div>
    </div>
  )
}

export default Modal
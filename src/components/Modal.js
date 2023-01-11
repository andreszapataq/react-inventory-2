import { useRef, useEffect } from "react"
import { FaTimesCircle } from "react-icons/fa"

import DropdownSearch from "./DropdownSearch"
import Button from "./Button"

const Modal = ({toggleModal, clientes}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal()
      }
    }
    
    const handleKeyDown = (event) => {
      if(event.key === 'Escape') {
        toggleModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [toggleModal])

  return (
    <div className="modal">
      <div ref={modalRef} className="flex flex-col gap-6 w-[412px] h-[492px] border-2 border-black bg-white p-5 rounded-lg">
        <div className="flex justify-end">
            <FaTimesCircle className="cursor-pointer" onClick={toggleModal} />
        </div>
        <h2 className="text-2xl font-semibold -mt-3">Crear bodega</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2"><span className="text-cerulean-blue">*</span> Nombre</h3>
          <input type="text" className="w-[346px] h-[38px] px-2 py-1 border border-cadet-blue-crayola rounded-lg" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2"><span className="text-cerulean-blue">*</span> Cliente</h3>
          <DropdownSearch label="Seleccionar cliente" clientes={clientes} />
        </div>
        <div className="w-[346px] flex justify-end gap-3 mt-24">
          <Button variant="cancel" label="Cancelar" onClick={toggleModal} />
          <Button variant="confirm" label="Crear bodega" />
        </div>
      </div>
    </div>
  )
}

export default Modal
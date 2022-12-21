import { FaTimesCircle } from "react-icons/fa"

const Modal = ({toggleModal}) => {
  return (
    <div className="modal">
        <div className="w-[412px] h-[452px] bg-white p-5">
            <div className="flex justify-end p-2">
                <FaTimesCircle className="cursor-pointer" onClick={toggleModal} />
            </div>
            <h2 className="text-xl font-semibold">Crear bodega</h2>
        </div>
    </div>
  )
}

export default Modal
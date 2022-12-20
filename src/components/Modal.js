import { FaTimes } from "react-icons/fa"

const Modal = ({toggleModal}) => {
  return (
    <div className="modal">
        <FaTimes className="cursor-pointer" onClick={toggleModal} />
    </div>
  )
}

export default Modal
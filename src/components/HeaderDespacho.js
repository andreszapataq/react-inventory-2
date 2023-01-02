import { MdOutlineSwapHorizontalCircle } from 'react-icons/md'

const HeaderDespacho = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Desde</div>
      <MdOutlineSwapHorizontalCircle size={33} className="fill-raisin-black cursor-pointer" />
      <div>Hacia</div>
    </div>
  )
}

export default HeaderDespacho
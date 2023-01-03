import { MdOutlineSwapHorizontalCircle } from 'react-icons/md'

const HeaderDespacho = () => {
  return (
    <div className="flex justify-between items-center">
      <div className='font-light text-xs'>Desde</div>
      <MdOutlineSwapHorizontalCircle size={33} className="fill-raisin-black cursor-pointer" />
      <div className='font-light text-xs'>Hacia</div>
    </div>
  )
}

export default HeaderDespacho
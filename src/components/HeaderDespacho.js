import { MdOutlineSwapHorizontalCircle, MdSwapHorizontalCircle, MdSwapHoriz } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const HeaderDespacho = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className='font-light text-xs'>Desde</p>
        <p className='font-semibold text-2xl'>Principal</p>
        <p className='font-light text-sm'>Vive Solutions - 900274934</p>
      </div>
      {/* <MdOutlineSwapHorizontalCircle size={37} className="fill-raisin-black cursor-pointer" /> */}
      {/* <MdSwapHorizontalCircle size={37} className="fill-raisin-black cursor-pointer" /> */}
      <MdSwapHoriz size={37} className="fill-raisin-black cursor-pointer" />
      <div>
        <p className='font-light text-xs mb-1.5'>Hacia</p>
        <div className='w-[428px]'>
          <div className="flex items-center px-4 py-2 border border-cadet-blue-crayola rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
            <FaSearch className="fill-cool-grey mr-2" />
            <input className="w-full border-none outline-none placeholder:text-cool-grey" type="text" placeholder="Bodega destino" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDespacho
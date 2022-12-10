import { useState } from 'react'
import {FaCaretSquareDown, FaSearch} from 'react-icons/fa'

const DropdownSearch = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center w-[287px] h-[38px] px-2 py-1 border border-cadet-blue-crayola rounded-lg'>
        <div>
          <p className='text-xs'>Hospital San José</p>
          <p className='text-[9px] font-light'>Megatecnología y Rehabilitación Colombiana - 900094992</p>
        </div>
        <FaCaretSquareDown className='fill-cadet-blue-crayola hover:fill-cool-grey cursor-pointer' />
      </div>

      {isOpen && (
        <div className='absolute w-[287px] mt-px rounded-lg shadow-lg'>
          <div className="py-1 rounded-lg bg-white">
            <div className='flex items-center px-3 py-2 bg-ghost-white rounded-tl-lg rounded-tr-lg'>
              <FaSearch size={14} className='fill-cool-grey mr-2' />
              <input type="text" className="w-full text-slate-500 text-xs bg-ghost-white placeholder:text-cool-grey focus:outline-none" placeholder="Buscar bodega" />
            </div>
            <div className="border-t border-gray-100" />
            <div className='px-4 py-2 text-[10px] text-cool-grey'>Sugerencias</div>
            <div>
              <div className='px-4 py-2 hover:bg-cultured cursor-pointer'>
                <p className='text-xs'>Principal</p>
                <p className='text-[7px] font-light'>Vive Solutions - 900274934</p>
              </div>
              <div className='px-4 py-2 hover:bg-cultured cursor-pointer'>
                <p className='text-xs'>Hospital San José</p>
                <p className='text-[7px] font-light'>Hospital San José de Popayán E.S.E. - 891580002</p>
              </div>
              <div className='px-4 py-2 hover:bg-cultured cursor-pointer'>
                <p className='text-xs'>Hospital San José</p>
                <p className='text-[7px] font-light'>Megatecnología y Rehabilitación Colombiana - 900094992</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownSearch
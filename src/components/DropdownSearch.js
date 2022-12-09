import { useState } from 'react'
import {FaCaretSquareDown} from 'react-icons/fa'

const DropdownSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

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
        <div className='origin-top-right right-0 mt-2 w-[287px] rounded-md shadow-lg'>
          <div className="py-1 rounded-md bg-white shadow-xs">
            <form>
              <input
                type="text"
                className="form-input py-2 px-3 block w-full rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Buscar bodega"
              />
            </form>
            <div className="border-t border-gray-100" />
            <div className="py-1">
              <a
                href="/"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                Principal
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                Hospital San José
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                Hospital San José
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownSearch
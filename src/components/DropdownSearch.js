import { useState, useRef, useEffect } from 'react'
import {FaCaretSquareDown, FaSearch} from 'react-icons/fa'
import DropdownRow from './DropdownRow'

const DropdownSearch = ({bodegas}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredBodegas, setFilteredBodegas] = useState(bodegas)
  const wrapperRef = useRef(null)

  const handleFilter = event => {
    const searchTerm = event.target.value.toLowerCase()
    const filtered = bodegas.filter(bodega =>
      Object.values(bodega).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm)
      )  
    )
    setFilteredBodegas(filtered)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event) {
      if(event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [wrapperRef])

  return (
    <div ref={wrapperRef} className="w-[287px]" >
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
              <input type="text" onChange={handleFilter} className="w-full text-slate-500 text-xs bg-ghost-white placeholder:text-cool-grey focus:outline-none" placeholder="Buscar bodega" />
            </div>
            <div className="border-t border-gray-100" />
            <div className='px-4 py-2 text-[10px] text-cool-grey'>Sugerencias</div>
            <div>
              {filteredBodegas.map((bodega, index) => (
                <DropdownRow key={index} bodega={bodega} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownSearch
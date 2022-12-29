import { useState, useRef, useEffect } from 'react'
import {FaCaretSquareDown, FaSearch, FaTimes} from 'react-icons/fa'
import DropdownRow from './DropdownRow'

import { useLocation } from 'react-router-dom'

const DropdownSearch = ({clientes, bodegas, label}) => {
  let location = useLocation()
  let data = []

  if(location.pathname === '/') {
    data = clientes
  } else if(location.pathname.includes('/lote/')) {
    data = bodegas
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const [filteredData, setFilteredData] = useState(data)
  const [searchTerm, setSearchTerm] = useState('')
  const wrapperRef = useRef(null)

  const handleFilter = event => {
    const inputValue = event.target.value.toLowerCase()
    const filtered = data.filter(element =>
      Object.values(element).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(inputValue)
      )  
    )
    setFilteredData(filtered)
    setSearchTerm(event.target.value)
  }

  const clearInput = () => {
    setSearchTerm('')
    setFilteredData(data)
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
    <div ref={wrapperRef} className="w-[346px]" >
      <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center w-[346px] h-[38px] px-2 py-1 border border-cadet-blue-crayola rounded-lg cursor-pointer'>
        <div>
          <p className='text-xs'>{label}</p>
        </div>
        <FaCaretSquareDown className='fill-cadet-blue-crayola hover:fill-cool-grey cursor-pointer' />
      </div>

      {isOpen && (
        <div className='absolute w-[346px] mt-px rounded-lg shadow-lg'>
          <div className="py-1 rounded-lg bg-white">
            <div className='flex items-center px-3 py-2 bg-ghost-white rounded-tl-lg rounded-tr-lg'>
              <FaSearch size={13} className='fill-cool-grey mr-2' />
              <input type="text" value={searchTerm} onChange={handleFilter} className="w-full text-slate-500 text-xs bg-ghost-white placeholder:text-cool-grey focus:outline-none" placeholder="Buscar bodega" />
              {searchTerm.length > 0 && (
                <FaTimes size={12} className='fill-cool-grey cursor-pointer ml-2' onClick={clearInput} />
              )}
            </div>
            <div className="border-t border-gray-100" />
            <div className='px-4 py-2 text-[10px] text-cool-grey'>Sugerencias</div>
            <div>
              {filteredData.map((item, index) => (
                <DropdownRow key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownSearch
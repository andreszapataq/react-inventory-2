import { useState } from 'react'
import { MdSwapHoriz } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const HeaderDespacho = ({nombre_bodega, cliente, id_number}) => {
  const [reverse, setReverse] = useState(false)

  const handleSwap = () => {
    setReverse(!reverse)
  }

  console.log(cliente)

  return (
    <div className='grid grid-cols-3'>
      <div className={`w-[428px] ${reverse ? "order-last justify-self-end" : "order-first"}`}>
        <p className='font-light text-xs'>{reverse ? 'Hacia' : 'Desde'}</p>
        <p className='font-semibold text-2xl'>{nombre_bodega}</p>
        <p className='font-light text-sm'>{cliente} - {id_number}</p>
      </div>
      <div className='justify-self-center self-center'>
        <MdSwapHoriz size={37} className="fill-raisin-black cursor-pointer" onClick={handleSwap} />
      </div>
      <div className={reverse ? "order-first" : "order-last justify-self-end"}>
        <p className='font-light text-xs mb-1.5'>{reverse ? 'Desde' : 'Hacia'}</p>
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
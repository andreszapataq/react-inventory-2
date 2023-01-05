import { useState } from 'react'
import { MdSwapHoriz } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const HeaderDespacho = () => {
  const [reverse, setReverse] = useState(false)

  const handleSwap = () => {
    setReverse(!reverse)
  }

  return (
    // <div className={`flex justify-between items-center ${reverse ? `flex-row-reverse` : ''}`}>
    <div className='grid grid-cols-3'>
      <div className={`w-[428px] ${reverse ? `order-last justify-self-end ` : `order-first`}`}>
        <p className='font-light text-xs'>Desde</p>
        <p className='font-semibold text-2xl'>Principal</p>
        <p className='font-light text-sm'>Vive Solutions - 900274934</p>
      </div>
      <div className='justify-self-center self-center'>
        <MdSwapHoriz size={37} className="fill-raisin-black cursor-pointer" onClick={handleSwap} />
      </div>
      <div className={reverse ? `order-first` : `order-last justify-self-end`}>
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
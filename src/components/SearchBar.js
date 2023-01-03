import { useLocation } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  let location = useLocation()

  return (
    <div className="w-4/5 lg:w-1/2 pb-10">
      {location.pathname === "/" && (
        <div className="flex items-center px-4 py-2 border border-cadet-blue-crayola rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
          <FaSearch className="fill-cool-grey mr-2" />
          <input className="w-full border-none outline-none placeholder:text-cool-grey" type="text" placeholder="Busca una bodega, referencia o lote" />
        </div>
      )}
      {location.pathname.includes('/bodega/') && (
        <div className="flex items-center px-4 py-2 border border-cadet-blue-crayola rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
          <FaSearch className="fill-cool-grey mr-2" />
          <input className="w-full border-none outline-none placeholder:text-cool-grey" type="text" placeholder="Busca por nombre de producto o código" />
        </div>
      )}
      {location.pathname.includes('/lotes/') && (
        <div className="flex items-center px-4 py-2 border border-cadet-blue-crayola rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
          <FaSearch className="fill-cool-grey mr-2" />
          <input className="w-full border-none outline-none placeholder:text-cool-grey" type="text" placeholder="Busca por lote o fecha de vencimiento" />
        </div>
      )}
      {location.pathname.includes('/despacho/') && (
        <div className="flex items-center px-4 py-2 border border-cadet-blue-crayola rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
          <FaSearch className="fill-cool-grey mr-2" />
          <input className="w-full border-none outline-none placeholder:text-cool-grey" type="text" placeholder="Busca por nombre de producto, código o lote" />
        </div>
      )}
    </div>
  )
}

export default SearchBar
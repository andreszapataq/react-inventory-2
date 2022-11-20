import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="w-5/6 lg:w-1/2 pb-10">
      <div className="flex flex-row items-center px-4 py-2 border border-slate-400 rounded-lg focus-within:border-transparent focus-within:outline outline-blue-700">
        <FaSearch className="fill-gray-400 mr-2" />
        <input className="w-full border-none outline-none" type="text" placeholder="Buscar bodega" />
      </div>
    </div>
  )
}

export default SearchBar
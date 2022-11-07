import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  return (
    <form className="w-1/2 pb-10">
      <div className="flex flex-row items-center px-4 py-2 border border-slate-400 rounded-lg focus-within:border-blue-700 focus-within:border-2">
        <FaSearch className="fill-gray-400 mr-2" />
        <input className="w-full border-none outline-none" type="text" placeholder="Buscar bodega" />
      </div>
    </form>
  )
}

export default SearchBar
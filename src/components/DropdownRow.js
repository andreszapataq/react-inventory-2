import { useLocation } from "react-router-dom"

const DropdownRow = ({item}) => {

  let location = useLocation()
  
  return (
    <div className='px-4 py-2 rounded-lg hover:bg-cultured cursor-pointer'>
      <p className='text-xs'>
        {location.pathname === '/' ? item.cliente : item.nombre_bodega}
      </p>
      <p className='text-[7px] font-light'>
        {location.pathname === '/' ? `${item.id_type} ${item.id_number}` : `${item.cliente} - ${item.id_number}`}
      </p>
    </div>
  )
}

export default DropdownRow
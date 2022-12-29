import { useLocation } from "react-router-dom"

const DropdownRow = ({item}) => {

  let location = useLocation()
  
  return (
    <div className='px-4 py-2 rounded-lg hover:bg-cultured cursor-pointer'>
      {location.pathname === '/' && (
        <>
          <p className='text-xs'>{item.nombre}</p>
          <p className='text-[7px] font-light'>{`${item.id_type} ${item.id_number}`}</p>
        </>
      )}
      {location.pathname.includes('/lote/') && (
        <>
          <p className='text-xs'>{item.nombre}</p>
          <p className='text-[7px] font-light'>{item.cliente}</p>
        </>
      )}
    </div>
  )
}

export default DropdownRow
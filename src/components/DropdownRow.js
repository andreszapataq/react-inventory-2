import { useLocation } from "react-router-dom"

const DropdownRow = ({bodega}) => {

  const location = useLocation()
  
  return (
    <div className='px-4 py-2 rounded-lg hover:bg-cultured cursor-pointer'>
      {location.pathname === '/' && (
        <>
          <p className='text-xs'>{bodega.nombre}</p>
          <p className='text-[7px] font-light'>{`${bodega.id_type} ${bodega.id_number}`}</p>
        </>
      )}
      {location.pathname.includes('/lote/') && (
        <>
          <p className='text-xs'>{bodega.nombre}</p>
          <p className='text-[7px] font-light'>{bodega.cliente}</p>
        </>
      )}
    </div>
  )
}

export default DropdownRow
const DropdownRow = ({bodega}) => {
  return (
    <div className='px-4 py-2 hover:bg-cultured cursor-pointer'>
        <p className='text-xs'>{bodega.nombre}</p>
        <p className='text-[7px] font-light'>{bodega.cliente}</p>
    </div>
  )
}

export default DropdownRow
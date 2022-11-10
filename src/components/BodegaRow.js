const BodegaRow = ({bodega}) => {
  console.log(bodega)
  
  return (
    <div className="pb-4">
        <h2 className="font-semibold text-lg">{bodega.nombre}</h2>
        <p className="font-light text-xs">{bodega.cliente}</p>
    </div>
  )
}

export default BodegaRow
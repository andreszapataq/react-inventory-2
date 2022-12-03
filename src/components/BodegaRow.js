const BodegaRow = ({bodega}) => {
  return (
    <div className="mb-4">
        <h2 className="text-lg font-semibold">{bodega.nombre}</h2>
        <p className="text-xs font-light">{bodega.cliente}</p>
    </div>
  )
}

export default BodegaRow
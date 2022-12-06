const BodegaRow = ({bodega}) => {
  return (
    <div className="rounded-lg px-4 py-3 hover:bg-cultured">
        <h2 className="text-lg font-semibold">{bodega.nombre}</h2>
        <p className="text-xs font-light">{bodega.cliente}</p>
    </div>
  )
}

export default BodegaRow
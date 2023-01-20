const BodegaRow = ({bodega}) => {
  return (
    <div className="rounded-lg px-4 py-3 hover:bg-cultured">
        <h2 className="text-lg font-semibold">{bodega.nombre_bodega}</h2>
        <p className="text-xs font-light">{bodega.cliente} - {bodega.id_number}</p>
    </div>
  )
}

export default BodegaRow
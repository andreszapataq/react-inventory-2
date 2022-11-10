import BodegaRow from "./BodegaRow"

function ItemContainer({data}) {
  return (
    <div className="w-3/5 lg:w-1/2">
      {data.map((bodega, index) => (
        <div key={index}>
          <BodegaRow bodega={bodega} />
        </div>
      ))}
    </div>
  )
}

export default ItemContainer
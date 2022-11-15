import ItemContainer from "../layout/ItemContainer"

function Bodegas({data}) {
  return (
    <div className="w-3/5 lg:w-1/2">
        <ItemContainer data={data} />
    </div>
  )
}

export default Bodegas
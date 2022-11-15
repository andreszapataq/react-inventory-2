import ItemContainer from "../layout/ItemContainer"

function Bodegas({bodegas}) {
  return (
    <div className="w-3/5 lg:w-1/2">
        <ItemContainer bodegas={bodegas} />
    </div>
  )
}

export default Bodegas
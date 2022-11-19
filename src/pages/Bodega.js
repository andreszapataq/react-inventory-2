import { useParams } from "react-router-dom"
import ItemContainer from "../layout/ItemContainer"

function Bodega() {
  const params = useParams()
  
  return (
    <div>
        Bodega {params.id}
        <ItemContainer />
    </div>
  )
}

export default Bodega
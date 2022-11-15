import { useParams } from "react-router-dom"
import ItemRow from "../components/ItemRow"

function Bodega() {
  const params = useParams()
  
  return (
    <div>
        Bodega {params.id}
        <ItemRow />
    </div>
  )
}

export default Bodega
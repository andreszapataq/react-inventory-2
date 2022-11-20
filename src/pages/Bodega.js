import { useParams } from "react-router-dom"
import ItemContainer from "../layout/ItemContainer"
import ItemRow from "../components/ItemRow"

function Bodega() {
  const params = useParams()
  
  return (
    <ItemContainer>
      Bodega {params.id}
      <ItemRow />
    </ItemContainer>
  )
}

export default Bodega
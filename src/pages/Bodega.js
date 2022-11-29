import { Link } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import ItemRow from "../components/ItemRow"

function Bodega({inventario}) {
  return (
    <ItemContainer>
      {inventario.map((referencia, index) => (
      <div key={index}>
        <Link to={`/lotes/${index}`} state={{referencia}}>
          <ItemRow referencia={referencia} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Bodega
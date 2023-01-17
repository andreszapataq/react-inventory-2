import { Link, useParams } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import ItemRow from "../components/ItemRow"

function Bodega({inventarios}) {
  let { id } = useParams()
  const bodegaInventario = inventarios[id]

  return (
    <ItemContainer>
      {bodegaInventario.map((referencia, index) => (
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
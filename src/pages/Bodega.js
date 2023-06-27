import { useLocation, Link } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import ItemRow from "../components/ItemRow"

function Bodega({inventarios}) {
  let location = useLocation()
  const bodegaInventario = location.state?.bodega?.stock
  const bodega = location.state?.bodega

  console.log(bodegaInventario)

  return (
    <ItemContainer>
      {bodegaInventario.map((referencia, index) => (
      <div key={index}>
        <Link to={`/lotes/${index}`} state={{referencia, bodega}}>
          <ItemRow referencia={referencia} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Bodega
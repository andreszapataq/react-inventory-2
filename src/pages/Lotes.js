import { useLocation, Link } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import ItemRow from "../components/ItemRow"

function Lotes() {
  let location = useLocation()
  const referencia = location.state?.referencia
  const lotes = location.state?.referencia?.lotes
  const bodega = location.state?.bodega

  return (
    <ItemContainer>
      {lotes.map((lote, index) => (
      <div key={index}>
        <Link to={`/lote/${index}`} state={{referencia, lote, bodega}}>
          <ItemRow lote={lote} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Lotes
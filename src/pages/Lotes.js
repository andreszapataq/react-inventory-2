import { Link } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import ItemRow from "../components/ItemRow"

function Lotes({lotes}) {
  return (
    <ItemContainer>
      {lotes.map((lote, index) => (
      <div key={index}>
        <Link to={`/lote/${index}`}>
          <ItemRow lote={lote} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Lotes
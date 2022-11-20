import { Link } from "react-router-dom"
import ItemContainer from "../layout/ItemContainer"
import BodegaRow from "../components/BodegaRow"

function Bodegas({bodegas}) {
  return (
    <ItemContainer>
      {bodegas.map((bodega, index) => (
      <div key={index}>
        <Link to={`/bodega/${index}`}>
          <BodegaRow bodega={bodega} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Bodegas
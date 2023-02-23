import { Link } from "react-router-dom"
import ItemContainer from "../components/ItemContainer"
import BodegaRow from "../components/BodegaRow"

function Bodegas({bodegas}) {
  console.log(bodegas)

  return (
    <ItemContainer>
      {bodegas.map((bodega, index) => (
      <div key={index}>
        <Link to={`/bodega/${index}`} state={{bodega}}>
          <BodegaRow bodega={bodega} />
        </Link>
      </div>
      ))}
    </ItemContainer>
  )
}

export default Bodegas
import { Link } from "react-router-dom"

import BodegaRow from "../components/BodegaRow"

function ItemContainer({bodegas}) {
  return (
    <div>
      {bodegas.map((bodega, index) => (
        <div key={index}>
          <Link to={`/bodega/${index}`}>
            <BodegaRow bodega={bodega} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ItemContainer
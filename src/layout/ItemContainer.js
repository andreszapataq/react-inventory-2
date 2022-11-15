import { Link } from "react-router-dom"

import BodegaRow from "../components/BodegaRow"

function ItemContainer({data}) {
  return (
    <div>
      {data.map((bodega, index) => (
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
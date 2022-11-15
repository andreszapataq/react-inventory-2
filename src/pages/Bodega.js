import { useParams } from "react-router-dom"

function Bodega() {
  const params = useParams()
  
  return (
    <div>
        Bodega {params.id}
    </div>
  )
}

export default Bodega
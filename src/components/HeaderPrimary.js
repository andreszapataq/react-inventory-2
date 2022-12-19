import { useState } from "react"
import { useLocation } from "react-router-dom"
import {FaWarehouse} from 'react-icons/fa'

const HeaderPrimary = () => {
  let location = useLocation()
  const bodega = location.state?.bodega?.nombre
  const cliente = location.state?.bodega?.cliente
  const nombre = location.state?.referencia?.nombre
  const codigo = location.state?.referencia?.codigo

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <div className="w-4/5 lg:w-1/2 flex flex-col items-center">
      {location.pathname === "/" && (
        <div className="grid grid-rows-3 w-full py-8 justify-items-center">
          <p></p>
          <h1 className="text-3xl font-semibold">Bodegas</h1>
          <p className="flex items-end text-xs underline text-cerulean-blue cursor-pointer" onClick={toggleModal}>Crear bodega</p>
          {isModalOpen && (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Modal content goes here */}
        </div>
      )}
        </div>
      )}
      {location.pathname.includes('/bodega/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <h1 className="text-3xl font-semibold">{bodega}</h1>
          <p className="text-xl">{cliente}</p>
          <p></p>
        </div>
      )}
      {location.pathname.includes('/lotes/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <h1 className="text-3xl font-semibold">{nombre}</h1>
          <p className="text-xl">{codigo}</p>
          <div className="flex">
            <FaWarehouse className="fill-raisin-black mr-2" />
            <p className="text-xs text-raisin-black"><span className="font-light">Bodega actual: </span>Hospital San José - Hospital San José de Popayán E.S.E.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderPrimary
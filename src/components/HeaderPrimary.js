import { useState } from "react"
import { useLocation, Link, useParams } from "react-router-dom"
import {FaWarehouse} from 'react-icons/fa'

import Modal from "./Modal"

const HeaderPrimary = ({clientes}) => {
  let { id } = useParams()
  let location = useLocation()

  const {nombre_bodega = "", cliente = "", id_number = ""} = location.state?.bodega || {}
  const {nombre = "", codigo = "", cantidad = ""} = location.state?.referencia || {}

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
            <Modal toggleModal={toggleModal} clientes={clientes} />
          )}
        </div>
      )}
      {location.pathname.includes('/bodega/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <h1 className="text-3xl font-semibold">{nombre_bodega}</h1>
          <p className="text-xl">{cliente} - {id_number}</p>
          <Link to={`/despacho/${id}`}>
            <p className="flex items-end text-xs underline text-cerulean-blue cursor-pointer">Crear despacho</p>
          </Link>
        </div>
      )}
      {location.pathname.includes('/lotes/') && (
        <div className="grid grid-rows-3 py-8 justify-items-center">
          <div className="flex">
            <h1 className="text-3xl font-semibold">{nombre}</h1>
            <div className="w-5 h-5 flex justify-center items-center rounded-full bg-raisin-black ml-1"><p className="text-white text-center text-[9px]">{cantidad}</p></div>
          </div>
          <p className="text-xl">{codigo}</p>
          <div className="flex">
            <FaWarehouse className="fill-raisin-black mr-2" />
            <p className="text-xs text-raisin-black"><span className="font-light">Bodega actual: </span>{nombre_bodega} - {cliente}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderPrimary
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

// Importo un icon de React-Icon para acceder al Cart desded el Navbar
export const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <>
      <Link to='/cart'>
        <i><AiOutlineShoppingCart/></i>
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }
      </Link>
    </>
  )
}


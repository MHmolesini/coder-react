import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem'
import { useContext } from 'react'
import React from 'react'
import './cart.css'

export const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Ver productos</Link>
            </>
        )
    }
    return (
        <>
            <div className='cart'>
                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)} 
                <div className='cart__detail'>
                    <div className='cart__detail__totales'>
                        <h3>Total: ${total}</h3>
                        <h3>Cantidad total: {cantidadTotal}</h3>
                    </div>
                    <div className='cart__detail__botones'>
                        <button className='cart__detail__vaciar' onClick={() => vaciarCarrito() }>Vaciar carrito</button>
                        <Link className='cart__detail__finalizar' to='/checkout'>Finalizar compra</Link>    
                    </div>
                </div>  
            </div>        
        </>
    )
  }



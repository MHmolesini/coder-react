import React from 'react'
import { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/index'
import { CarritoContext } from '../../Context/CarritoContext.jsx'
import './itemDetail.css'
import { Link } from 'react-router-dom'



export const ItemDetail = ({id, stock, categories, productName, price, productImage, talle, description}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext);

    //2)Creamos una función manejadora de la cantidad: 
    const manejadorCantidad = (cantidad) => {
      setAgregarCantidad(cantidad);
      console.log("Productos Agregados:" + cantidad);
  
      //Ahora acá creo un objeto con el item y la cantidad:
      const item = { id, productName, price };
      agregarProducto(item, cantidad);
    }

    return (
        <>
            <div className='itemDetail'>
                <div className='itemDetail__categoria'>
                    <p>{categories}</p>
                </div>
                <div className='itemDetail__section'>
                    <div className='itemDetail__section__image'>
                        <img src={productImage} alt="" />
                    </div>
                    <div className='itemDetail__section__description'>
                        <div className='itemDetail__section__description__detalle'>
                            <h2 className='texto'>{productName}</h2>
                            <p className='precio'>${price}</p>
                            <p className='texto'>Unidades disponibles: {stock}</p>
                            <p className='texto'>TALLE</p>
                            <div className='talle'>
                                <p>{talle}</p>
                            </div>
                            <p className='texto'>COLOR</p>
                            <div className='color'></div>
                            <div className='itemDetail__section__description__detalle__cart'>
                                {
                                    agregarCantidad > 0 ? (<Link to='/cart'><button className='terminarCompra'>Terminar compra</button></Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                                }
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './item.css'

export const Item = ({id, productName, price, productImage}) => {
  return (
    <>
        <div className='card'>
            <div className="card__img">
                <img src={productImage} alt={productName} />
            </div>
            <div className="card__description">
                <p className="card__description__price">$ {price}</p>
                <p>{productName}</p>
                <p>{id}</p>
                <button>Agregar</button>
            </div>
        </div>
    </>
  )
}

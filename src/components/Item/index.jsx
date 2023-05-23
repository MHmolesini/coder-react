import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    </>
  )
}

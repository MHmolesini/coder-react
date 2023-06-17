import React from 'react'
import './card.css'

export const Card = (card) => {
  return (
    <>
        <div className='card'>
            <div className="card__img">
                <img src={card.productImage} alt="Ropa" />
            </div>
            <div className="card__description">
                <p className="card__description__price">$ {card.price}</p>
                <p>{card.productName}</p>
                <button>Agregar</button>
            </div>
        </div>
    </>
  )
}

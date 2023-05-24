import React from 'react'
import { useState, useEffect } from 'react'
import { ItemCount } from '../ItemCount/index'
import './itemDetail.css'

export const ItemDetail = ({id, categories, productName, price, productImage, talle, description}) => {


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
                            <p>${price}</p>
                            <p className='texto'>TALLE</p>
                            <div className='talle'>
                                <p>{talle}</p>
                            </div>
                            <p className='texto'>COLOR</p>
                            <div className='color'></div>
                            <div className='itemDetail__section__description__detalle__cart'>
                                <ItemCount/>
                                <button className='agregarCarrito'>Agregar</button>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

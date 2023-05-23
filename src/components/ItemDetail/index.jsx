import React from 'react'
import { useState, useEffect } from 'react'
import { ItemCount } from '../ItemCount/index'

export const ItemDetail = ({id, productName, price, productImage}) => {


    return (
        <>
            <div>
                <h2>nombre: {productName}</h2>
                <p>precio: {price}</p>
                <ItemCount/>
            </div>
        </>
    )
}

import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUnProducto } from '../../asyncmock'
import { ItemDetail } from '../ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(()=>{
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])

    return (
        <>
            <ItemDetail {...producto}/>
        </>
    )
}


import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/index'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))

    }, [idCategoria])

    return (
        <>
            <div className="itemListContainer">
                <h2>Principales productos</h2>
                <div className='itemListContainer__main'>
                    <ItemList productos={productos}/>
                </div>
            </div>
        </>
    )
}

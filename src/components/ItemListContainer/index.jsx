import React, { useState, useEffect } from 'react'
// import { PRODUCTS } from '../../assets/productList/productos'
// import { Card } from '../Card'
import { ItemList } from '../ItemList/index'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

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
            <div className="main">
                <h2>Principales productos</h2>
                <ItemList productos={productos}/>
            </div>
            
            {/* <div className="main">
                <h2>{props.greeting}</h2>

                <div className="main__products">
                    {products.map(product => {
                        return (
                            <div className="main__products__item">
                                <Card
                                    key={product.id}
                                    productImage={product.productImage}
                                    productName={product.productName}
                                    price={product.price}
                                    id={product.id}/>
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </>
    )
}

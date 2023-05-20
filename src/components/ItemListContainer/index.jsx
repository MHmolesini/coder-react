import React, { useState, useEffect } from 'react'
// import { PRODUCTS } from '../../assets/productList/productos'
// import { Card } from '../Card'
import { ItemList } from '../ItemList/index'
import { getProductos } from '../../asyncmock'
import './itemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className="main">
                <h2>Prodcutos</h2>
                <ItemList
                    productos={productos}/>
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

import React, { useState } from 'react'
import { PRODUCTS } from '../../assets/productList/productos'
import { Card } from '../Card'
import './itemListContainer.css'

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(PRODUCTS)

  return (
    <>
        <div className="main">
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
        </div>
    </>
  )
}

// import React, { useState } from "react";
// import { PRODUCTS } from '../../assets/ProductList/products'
// import { Card } from "../Card";
// import css from './products.module.css'

// export const Products = () => {
//     const [products, setProducts] = useState(PRODUCTS);

//     return (
//         <div className={css.main__products}>
//             {products.map(product => {
//                 return (
//                     <div className={css.main__products__item}>
//                         <Card 
//                             key={product.id}
//                             productImage={product.productImage}
//                             productName={product.productName}
//                             price={product.price}
//                             id={product.id}
//                             >
//                         </Card>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
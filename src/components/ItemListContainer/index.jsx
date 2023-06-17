import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/index'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'

import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/config'

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect( () => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("categories", "==", idCategoria)) : collection(db, "inventario");
    
        getDocs(misProductos)
          .then(res => {
            const nuevosProductos = res.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos);
          })
          .catch(error => console.log(error))
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

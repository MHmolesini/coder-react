import React from 'react'
import { useEffect, useState } from 'react'
import { collection, query, getDocs, where, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/config'

export const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect( () => {
        const misProductos = query(collection(db, 'productos'))

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({ id:doc.id, ...doc.data()})))
            })
    }, [productos])

    const descontarStock = async (producto) => {
        const productoRef = doc(db, 'productos', producto.id)
        let nuevoStock = producto.stock -1

        await updateDoc(productoRef, {stock: nuevoStock})
    }
    return (
        <>
            <h2>Mis productos 2</h2>
            <div>
                {
                    productos.map((producto) => (
                        <div key={producto.id}>
                            <h2>Nombre: {producto.productName}</h2>
                            <p>Precio: {producto.price}</p>
                            <button onClick={()=> descontarStock(producto)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

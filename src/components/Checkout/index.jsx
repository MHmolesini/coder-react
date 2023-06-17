import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc, getDoc, updateDoc, doc } from 'firebase/firestore'
import './checkout.css'

export const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    // Funciones y validaciones:
    const manejadorFormulario = (event) => {
        event.preventDefault()

        // Verificamos que los campos esten completos
        if(!nombre || !apellido || !telefono || ! email || !emailConfirmacion){
            setError("Por favor complete todos los campos")
            return
        }

        // Validamos que los campos del email coincidan
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden")
            return
        }

        // Creamos el objeto de la orden
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.productName,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.price * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        }

        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db, 'inventario', productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })

            })
        )
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch(error => {
                        console.error("Error al crear la orden: ", error)
                        setError("Se produjo un error al crear la orden")
                    })
            })
            .catch((error) => {
                console.error("Error al actualizar el stock", error)
                setError("Se produjo un error al actualizar el stock de los productos")
            })
    }

    return (
        <>
              <div className='checkout'>
                <h2>Checkout</h2>
                <form className='checkout__form' onSubmit={manejadorFormulario}>
                    {carrito.map(producto => {
                        <div className='checkout__form__cart'>
                            <p>
                                {producto.item.productName} x {producto.cantidad}
                            </p>
                            <p>Precio $: {producto.item.price}</p>
                            <hr />
                        </div>
                    })}
                    <p>Total compra: {total}</p>
                    <hr />
                        <div className='checkout__form__label'>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id='nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
                        </div>
                        <div className='checkout__form__label'>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id='apellido' onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
                        </div>
                        <div className='checkout__form__label'>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="number" id='telefono' onChange={(e)=> setTelefono(e.target.value)} value={telefono}/>
                        </div>
                        <div className='checkout__form__label'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className='checkout__form__label'>
                            <label htmlFor="emailConfirmacion">emailConfirmacion</label>
                            <input type="email" id='emailConfirmacion' onChange={(e)=> setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
                        </div>

                        {error && <p className='error'>{error}</p>}
                        <button type='submit'>Finalizar Compra</button>
                </form>
                {
                    ordenId && (
                        <strong>Gracias por tu compra! Tu numero de orden es {ordenId}</strong>
                    )
                }
              </div>
        </>
    )
}

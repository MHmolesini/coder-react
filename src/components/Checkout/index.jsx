import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'

export const Checkout = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext)
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
            email
        }

        // Guardamos la orden en la base de datos
        addDoc(collection(db, 'ordenes'), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(error => {
                console.error("Error al crear la orden: ", error)
                setError("Se produjo un error al crear la orden")
            })
    }

    return (
        <>
              <div>
                <h2>Checkout</h2>
                <form onSubmit={manejadorFormulario}>
                    {carrito.map(producto => {
                        <div>
                            <p>
                                {producto.item.productName} x {producto.cantidad}
                            </p>
                            <p>Precio $: {producto.item.price}</p>
                            <hr />
                        </div>
                    })}
                    <hr />
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id='nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" id='apellido' onChange={(e)=> setApellido(e.target.value)} value={apellido}/>
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="number" id='telefono' onChange={(e)=> setTelefono(e.target.value)} value={telefono}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                        </div>
                        <div>
                            <label htmlFor="emailConfirmacion">emailConfirmacion</label>
                            <input type="email" id='emailConfirmacion' onChange={(e)=> setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
                        </div>

                        {error && <p>{error}</p>}
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



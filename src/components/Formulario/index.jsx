import React, { useState } from 'react'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'

export const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    // Funciones para manejar todo el formulario
    const handlerFormulario = (event) => {
        // Prevenimos la recarga de la pagina
        event.preventDefault()

        addDoc(collection(db, "formulario"), {
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
        })

        setNombre('')
        setApellido('')
        setTelefono('')
    }

  return (
    <>
        <form onSubmit={ handlerFormulario }>
            <h2>Formulario 3</h2>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>

            <label htmlFor="apellido">Apellido</label>
            <input type="text" id='apellido' onChange={(e)=> setApellido(e.target.value)} value={apellido}/>

            <label htmlFor="telefono">Telefono</label>
            <input type="number" id='telefono' onChange={(e)=> setTelefono(e.target.value)} value={telefono}/>

            <button type='submit'>Enviar datos</button>
        </form>
    </>
  )
}

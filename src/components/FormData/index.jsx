import React, { useState } from 'react'

export const FormData = () => {
    const [datos, setDatos] = useState({nombre: '', apellido: '', email: ''})
    
    const manejarCambio = (event) => {
        setDatos({...datos, [event.target.name]: event.target.value})
    }

    const manejarEnvio = (event) => {
        event.preventDefault()
        // const formularioDatos = new FormData(event.target)
        // console.log(formularioDatos.get('nombre'))
        // console.log(formularioDatos.get('apellido'))
        // console.log(formularioDatos.get('email'))
        console.log(datos)
    }

    return (
        <>
            <form onSubmit={manejarEnvio}>
                <h2>Nuevo formulario de contacto</h2>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name='nombre' value={datos.nombre} onChange={manejarCambio}/>

                <label htmlFor="apellido">Apellido: </label>
                <input type="text" name='apellido' value={datos.apellido} onChange={manejarCambio}/>

                <label htmlFor="email">E-mail: </label>
                <input type="email" name='email' value={datos.email} onChange={manejarCambio}/>

                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

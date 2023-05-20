import React from 'react'
import { useState, useEffect } from 'react'

export const Fetch = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=> {
        // Peticion a JSON Placeholder
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respuesta => respuesta.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2>Usuarios de JSONPlaceholders</h2>
            {
                usuarios.map(usuario => {
                    return(
                        <div key={usuario.id}>
                            <p>Nombre: {usuario.name}</p>
                            <p>Email: {usuario.email}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
        
    )
}

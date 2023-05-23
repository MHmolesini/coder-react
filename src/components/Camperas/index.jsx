import React from 'react'
import { useParams } from 'react-router-dom'
// useParams es un hook que me permite acceder a los parametros de las URL en los componentes funcionales.
// ej: https://zahria/camperas/10
// Yo puedo obtener ese 10 y almacenarlo

export const Camperas = () => {
    const {id} = useParams()
    // Obtengo el valor del parametro y lo voy a desestructurar
    // Y puedo trabajar con este dato

    console.log(id)
  return (
    <>
     <h2>Remeras</h2>
     <p>ID Producto: {id}</p>
    </>
  )
}

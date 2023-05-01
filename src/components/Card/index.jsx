import React from 'react'

export const Card = ({nombre, precio}) => {
  return (
    <>
        <h2>Mi Producto</h2>
        <p>Nombre: {nombre}</p>
        <p>Precio: {precio}</p>
        <button>Agregar</button>
    </>
  )
}

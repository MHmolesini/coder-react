import React from 'react'
import { Card } from '../Card'

export const ItemListContainer = (props) => {

    const productos = [{ 
        nombre: 'Arroz',
        precio: 100
    },
    {
        nombre: 'Fideos',
        precio: 180
    },
    {
        nombre: 'Calabaza',
        precio: 500
    }]

  return (
    <>
        <h2>{props.greeting}</h2>

        <Card 
            nombre='Arroz'
            precio={100}/>
        <Card 
            nombre='Fideos'
            precio={180}/>
        <Card {...productos}/>


    </>
  )
}

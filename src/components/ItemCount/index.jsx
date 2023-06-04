import React, { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className='seleccionarStock'>
                <button className='seleccionarStockMenos' onClick={decrementar}> - </button>
                <div>
                    <p>{contador}</p>
                </div>
                <button className='seleccionarStockMas' onClick={incrementar}> + </button>
            </div>
            <button className='agregarCarrito' onClick={() => funcionAgregar(contador)}>Agregar</button>
        </>
    )
}

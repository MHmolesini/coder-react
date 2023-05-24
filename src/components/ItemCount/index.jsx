import React, { useState } from 'react'
import './itemCount.css'

export const ItemCount = () => {

    const [contador, setContador] = useState(1);

    let maximoStock = 10;

    const incrementar = () =>{
        if(contador < maximoStock){
            setContador(contador + 1)
        }
    }

    const decrementar = () =>{
        if(contador > 1){
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
        </>
    )
}

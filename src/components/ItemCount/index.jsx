import React, { useState } from 'react'

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
            <button onClick={decrementar}> - </button>
            <p>{contador}</p>
            <button onClick={incrementar}> + </button>
        </>
    )
}

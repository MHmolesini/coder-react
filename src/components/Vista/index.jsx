import React from 'react'
import { useState } from 'react'
import css from './vista.css'

export const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false)

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro)
    }
    const estilo = modoOscuro ? 'oscuro' : 'claro';

  return (
    <>
        <div className={estilo}>
            <button onClick={cambiarModo}>{modoOscuro ? 'claro' : 'oscuro'}</button>
            <h2>Componente vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet nam dolore molestiae expedita. Rem cupiditate nisi esse reiciendis, ipsum fugiat nemo odit velit adipisci eaque reprehenderit, ullam sapiente nesciunt?</p>
        </div>
    </>
  )
}

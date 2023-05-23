import React, { useEffect, useState } from 'react'


export const Simpsons = () => {
    const [personaje, setPersonaje] = useState([])

    useEffect(()=>{
    //     fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
    //         .then(respuesta => respuesta.json())
    //         .then(data => setPersonaje(data))
    //         .catch(error => console.error(error))


    // Si quiero trabajar con async y await en lugar de then y catch, tengo que realizar lo siguiente:

    // Puedo usar try y catch que me permite trabajar errores. Si algo dentro del Try falla, el codigo continua con el catch.
        const pedirPersonajes = async () => {
            try{
                const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
                const data = await respuesta.json()
                setPersonaje(data)
            } catch (error){
                console.log(error)
            }
        }
        pedirPersonajes()
    }, [])

    return (
        <div>
            <h2>Simpsons</h2>
            {
                personaje.map((personaje, index)=>{
                    return(
                        <div key={index}>
                            <p>{personaje.character}</p>
                            <img src={personaje.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

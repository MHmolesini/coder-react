import React from 'react'
import { useState, useEffect } from 'react'

// Array de productos

const misProductos = [
    {
        id: 1,
        categories: 'Pantalones',
        productName: "Pantalón de Jean con roturas",
        price: 8499.0,
        firstDescription: 'Top Saten Color Rojo \n\nTalles único si te permite comprar significa que hay stock \n\nComprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
        stock: 9,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: 2,
        productName: "Top frunce con tiras",
        price: 3200.0,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: 3,
        productName: "Top mujer corset charol",
        price: 3499.0,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: 4,
        productName: "Remera Hilo Musculosa Algodón",
        price: 3200.0,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: 5,
        productName: "Jean Mujer Tiro Alto Elastizado Negro",
        price: 6900.0,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: 6,
        productName: "Top un solo hombro fluor",
        price: 3200.0,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    }
]

// Funcion que retorna una promesa con un retardo de 2 segundos.
const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        }, 2000)
    })
}



export const AsyncAwait = () => {
    const [misProductos, setMisProductos] = useState([])

    useEffect(()=>{
        console.log(getMisProductos)
        // Si hago esto puedo ver que la promesa esta pendiente, y esto ocurre porque el console.log se muestra antes de que pasen los 2 segundos de retraso.

        // Entonces si yo quiero decirle a mi codigo "espera a que termine esta tarea, antes de avanzar con la siguiente" puedo utilizar la sintaxis "async await".

        // Await significa "espera"
        

        // Si hago esto me avisa el visual que await solo se puede usar en funciones async. Entonces realizo lo siguiente:
        const pedirDatos = async () => {
            const inverntarioProductos = await getMisProductos()
            setMisProductos(inverntarioProductos)
        }

        pedirDatos()
    }, [])

    return (
        <>
            <div>
                <h2>Mis productos usando Async Await</h2>
                {
                    misProductos.map((producto, index) => {
                        return(
                            <div key={index}>
                                <p>{producto.price}</p>
                                <p>{producto.productName}</p>
                            </div>
                        )
                    } )
                }
            </div>
        </>
    )
}

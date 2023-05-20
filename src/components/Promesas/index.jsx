import React from "react";

// Programacion sincronica y asincronica

// La programacion sincronica ejecuta una tarea a la vez, en un orden secuencial

// La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial.

// Para practicas podemos usar setTimeout. Recuerden que esta funcion recibe 2 parametros: una funcion y un tiempo en milisegundos.

// Me permite simular el restraso de una peticion a un servidor.

// Promesas: Un objeto que representa un evento a futuro.
// En general representa el resultado eventual de una peticion asincrona.

// Las promesas tienen 3 estados: pendiente, cumplida o rechazada


export const Promesas = () => {
    // Programacion sincronica
    console.log('Tarea 1')
    console.log('Tarea 2')

    // Programacion asincronica

    setTimeout( ()=>{
        console.log('Tarea a')
    }, 2000)

    setTimeout( ()=>{
        console.log('Tarea b')
    }, 1000)

    // Promesas: 
    const tusFalsasPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if(estado) {
                resolve('Promesa cumplida, me regalaron lo que queria')
            } else{
                reject('Promesa rechazada, me llego carbon')
            }
        })
    }

    console.log(tusFalsasPromesas(false))

    // THEN Y CATCH:
    // Podemos concatenar los metodos que me permiten ejecutar una funcion cuando la promesa se cumpla o se rechaza.
    // THEN se ejecuta cuando la promesa se cumple.
    // CATCH se ejecuta cuando la promesa se rechaza
    // FINALLY se ejecuta siempre

    tusFalsasPromesas(false)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })

    // Ahora practicamos con un array de datos:
    const array = ['uno', 'dos', 'tres', 'cuatro']

    const solicitarNumeros = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if(estado){
                resuelto(array)
            } else{
                rechazado('No hay numeros')
            }
        })
    }

    solicitarNumeros(true)
        .then(respuesta => {
            console.table(respuesta)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            console.log('Proceso finalizado')
        })

    return(
        <>
            <div>Promesas</div>
        </>
    )
}


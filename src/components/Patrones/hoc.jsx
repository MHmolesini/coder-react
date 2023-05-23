// PATRONES DE DISEÑO

// En React tenemos algunos patrones de diseño que nos permite reutilizar componentes.
// 1) High Order Components (HOC)
// 2) Render Props

// 1) Es una funcion que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional.

export const MensajeConTitulo = (Mensaje) => {
    return function(){
        return(
            <>
                <h2>Hola mensaje</h2>
                <Mensaje/>
            </>
        )
    }
}

// Ejemplo
export const ConAumento = (Componente) => {
    return function({nombre, precio}){
        return(
            <>
                <h2>Hola precio</h2>
                <Componente precio={precio} nombre={nombre}/>
            </>
        )
    }
}

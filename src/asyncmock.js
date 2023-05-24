// importo las imagenes
import product1 from '../public/images/productos/1.webp'
import product2 from '../public/images/productos/2.webp'
import product3 from '../public/images/productos/3.webp'
import product4 from '../public/images/productos/4.webp'
import product5 from '../public/images/productos/5.webp'
import product6 from '../public/images/productos/6.webp'

// Lista de productos
const productos = [
    {
        id: "1",
        categories: "pantalones",
        productName: "Pantalón de Jean con roturas",
        price: 8499.0,
        talle: "M",
        firstDescription: 'Top Saten Color Rojo \n\nTalles único si te permite comprar significa que hay stock \n\nComprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
        stock: 9,
        productImage: product1,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: "2",
        categories: "remeras",
        productName: "Top frunce con tiras",
        price: 3200.0,
        productImage: product2,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: "3",
        categories: "remeras",
        productName: "Top mujer corset charol",
        price: 3499.0,
       productImage: product3,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: "4",
        categories: "remeras",
        productName: "Remera Hilo Musculosa Algodón",
        price: 3200.0,
        productImage: product4,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: "5",
        categories: "pantalones",
        productName: "Jean Mujer Tiro Alto Elastizado Negro",
        price: 6900.0,
        productImage: product5,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    },
    {
        id: "6",
        categories: "remeras",
        productName: "Top un solo hombro fluor",
        price: 3200.0,
        productImage: product6,
        description: 'Top Saten color rojo elastizado ideal para temporada primavera – verano. \n\nTalle único comprende “S” y “M” \n\nSi te gusto seguinos en nuestras redes y mira los nuevos ingresos! \n\nhttps://instagram.com/zahriamoda \n\nhttps://www.facebook.com/Zahriamoda \n\nhttps://zahriaind.com',
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 100)
    })
}

// Creamos una nueva funcion, similar a la anterior pero que nos retorne un solo producto
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        }, 100)
    })
}

// Creamos una nueva funcion que retorna toda la categoria
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const productosCategorias = productos.filter(prod => prod.categories === idCategoria)
            resolve(productosCategorias)
        }, 2000)
    })
}
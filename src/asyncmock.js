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
        talle: "38",
        firstDescription: 'Top Saten Color Rojo \n\nTalles único si te permite comprar significa que hay stock \n\nComprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
        stock: 9,
        productImage: product1,
        description: 'Pantalón de Jean con roturas.\n Talles del 36 al 44, si te permite seleccionar significa que hay stock\n\nLas medidas las tomamos con las prendas estiradas en superficie plana, te recomendamos comprar el talle que utilizas normalmente.',
    },
    {
        id: "2",
        categories: "remeras",
        productName: "Top frunce con tiras",
        price: 3200.0,
        talle: "M",
        productImage: product2,
        description: 'Top frunce con tiras. Talles único si te permite comprar significa que hay stock. Comprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
    },
    {
        id: "3",
        categories: "remeras",
        productName: "Top mujer corset charol",
        price: 3499.0,
        talle: "M",
        productImage: product3,
        description: 'Top mujer corset charol. Talles único si te permite comprar significa que hay stock. Comprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
    },
    {
        id: "4",
        categories: "remeras",
        productName: "Remera Hilo Musculosa Algodón",
        price: 3200.0,
        talle: "M",
        productImage: product4,
        description: 'Remeras mujer de algodón. Talles único si te permite comprar significa que hay stock. Comprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
    },
    {
        id: "5",
        categories: "pantalones",
        productName: "Jean Mujer Tiro Alto Elastizado Negro",
        price: 6900.0,
        talle: "36",
        productImage: product5,
        description: 'Jean Mujer Tiro Alto Elastizado Negro. Talles del 36 al 44, si te permite seleccionar significa que hay stock. Las medidas las tomamos con las prendas estiradas en superficie plana, te recomendamos comprar el talle que utilizas normalmente.',
    },
    {
        id: "6",
        categories: "remeras",
        productName: "Top un solo hombro fluor",
        price: 3200.0,
        talle: "M",
        productImage: product6,
        description: 'Top un solo hombro fluor. Talles único si te permite comprar significa que hay stock. Comprende del “S” al “M” ya que la tela es elastizada, si te quedo alguna duda escribinos!',
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
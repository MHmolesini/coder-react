import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
//import { Vista } from './components/Vista'
// import { Promesas } from './components/Promesas/index'
// import { Fetch } from './components/Fetch/index'
// import { AsyncAwait } from './components/Fetch/asyncAwait'

import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
//import {Mensaje} from './components/Patrones/Mensaje'
//import { MensajeConTitulo } from './components/Patrones/hoc'
import { Checkout } from './components/Checkout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Formulario} from './components/Formulario'
import {FormData} from './components/FormData'

import { CarritoProvider } from './Context/CarritoContext.jsx';
//import { Productos } from './components/Productos/Productos'

function App() {
  const [count, setCount] = useState(0)

  // const NuevoComponente = MensajeConTitulo(Mensaje)

  return (
    <>
      {/* <Vista/> */}

      {/* Router */}
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
              <Route path='*' element={<h2>Sitio en Construccion</h2>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </CarritoProvider>
      </BrowserRouter>

      {/* <Promesas/> */}
      {/* <Fetch/>
      <AsyncAwait/> */}
      {/* {
        <NuevoComponente/>
      } */}
      {/* <Productos/> */}
      <Formulario/>
      <FormData/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


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

    </>
  )
}

export default App

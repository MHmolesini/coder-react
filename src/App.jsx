import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
//import { Vista } from './components/Vista'
// import { Promesas } from './components/Promesas/index'
// import { Fetch } from './components/Fetch/index'
// import { AsyncAwait } from './components/Fetch/asyncAwait'

import { ItemDetailContainer } from './components/ItemDetailContainer'
//import {Mensaje} from './components/Patrones/Mensaje'
//import { MensajeConTitulo } from './components/Patrones/hoc'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Formulario} from './components/Formulario'
import {FormData} from './components/FormData'

function App() {
  const [count, setCount] = useState(0)

  // const NuevoComponente = MensajeConTitulo(Mensaje)

  return (
    <>
      {/* <Vista/> */}

      {/* Router */}
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={<h2>Sitio en Construccion</h2>}/>
        </Routes>
      </BrowserRouter>

      {/* <Promesas/> */}
      {/* <Fetch/>
      <AsyncAwait/> */}
      {/* {
        <NuevoComponente/>
      } */}
      <Formulario/>
      <FormData/>
    </>
  )
}

export default App

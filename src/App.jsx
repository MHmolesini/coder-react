import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
//import { ItemCount} from './components/ItemCount/index'
//import { Vista } from './components/Vista'
import { Promesas } from './components/Promesas/index'
import { Fetch } from './components/Fetch/index'
import { AsyncAwait } from './components/Fetch/asyncAwait'

import { ItemDetailContainer } from './components/ItemDetailContainer'
//import {Mensaje} from './components/Patrones/Mensaje'
//import { MensajeConTitulo } from './components/Patrones/hoc'

// React Router es una libreria de enrutamiento para React.
// Nos permite navegar entre componentes sin tener que recargar la aplicacion

// 1) Instalamos: npm install react-router-dom
// 2) Importamos en nuestra APP los siguientes componentes de la libreria: BrowserRoyter, Route, Routes

import {Home} from './components/Home'
// import {Camperas} from './components/Camperas'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



// BrowserRouter: envuelve todos los componengtes de nuestra aplicacion y habilita la navegacion entre ellos.
// Routes: definir las rutas de navegacion
// Route: define una ruta en especifico. Tenemos que completar la prop "path" con la ruta a vincular. Y el la prop "element" pasamos el componente que se debe renderizar cuando hacemos click.

function App() {
  const [count, setCount] = useState(0)

  // const NuevoComponente = MensajeConTitulo(Mensaje)

  return (
    <>
      
      {/* <ItemCount/>
      <Vista/> */}

      {/* Router */}
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          {/* <Route path='/camperas' element={ <Camperas/> }/>
          <Route path='/pantalones' element={ <Pantalones/> }/>
          <Route path='/remeras' element={ <Remeras/> }/> */}
          {/* <Route path='/' element={ <ItemListContainer greeting='Productos principales'/> }/> */}
          {/* <Route path='/categorias/:categorie' element={<ItemListContainer/> }/>
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/> */}
        </Routes>
      </BrowserRouter>

      
      {/* <ItemListContainer/>
      <ItemDetailContainer/> */}
      

      <Promesas/>
      <Fetch/>
      <AsyncAwait/>

      {/* {
        <NuevoComponente/>
      } */}
    </>
  )
}

export default App

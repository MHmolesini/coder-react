import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { CarritoProvider } from './Context/CarritoContext.jsx';

function App() {


  return (
    <>
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

import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
//import { ItemCount} from './components/ItemCount/index'
//import { Vista } from './components/Vista'
import { Promesas } from './components/Promesas/index'
import { Fetch } from './components/Fetch/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Productos principales'/>
      {/* <ItemCount/>
      <Vista/> */}
      <Promesas/>
      <Fetch/>
    </>
  )
}

export default App

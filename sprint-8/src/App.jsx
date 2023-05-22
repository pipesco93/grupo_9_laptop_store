import { useState } from 'react'
import './App.css'

import CardTotals from './components/CardTotals/CardTotals'
import UltimoProd from './components/UltimoProd/UltimoProd'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <CardTotals/>
      <UltimoProd/>
      <ProductList/>
    </div>
  )
}

export default App

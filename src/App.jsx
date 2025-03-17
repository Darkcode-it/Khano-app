import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu.jsx'
import Header from './components/header/Header.jsx'
import Store from "./components/Store/Story.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
 <div dir='rtl'>
  <Menu/>
  <Header/>
  <Store/>
 </div>
  )
}

export default App

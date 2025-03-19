import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu.jsx'
import Header from './components/header/Header.jsx'
import Store from "./components/Store/Story.jsx"
import Articles from "./components/Articles/Article.jsx";
import About from "./components/about/About.jsx";
import Calculator from "./components/calculator/Calculator.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
 <div dir='rtl'>
  <Menu/>
  <Header/>
  <Store/>
    <Articles/>
     <About/>
     <Calculator/>
     <Footer/>
 </div>
  )
}

export default App

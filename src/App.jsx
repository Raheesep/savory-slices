import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import OurProducts from './components/OurProducts.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <OurProducts />
      <Footer />
    </>
  )
}

export default App

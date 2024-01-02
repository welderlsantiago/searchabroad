import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App

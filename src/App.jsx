import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App

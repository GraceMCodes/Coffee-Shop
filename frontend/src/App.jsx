import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navi from './Components/Nav'
import Coffee from './Components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Coffee/>
    <Header/>
    <Navi/>
    
    </>
  )
}

export default App

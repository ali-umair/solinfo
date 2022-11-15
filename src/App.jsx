import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Countdown from './components/Countdown'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Countdown />
  )
}

export default App

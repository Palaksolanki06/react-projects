import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  let [counter, setCount] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCount(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1)
    }
  }
  return (
    <>
      <h1>Code aur Code</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}
      >Add value {counter}) </button>

      <button onClick={removeValue}
      >Remove value {counter} </button>
    </>
  )
}

export default App

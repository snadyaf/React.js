import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  let contador = 0
  let mensagem = ''

  function Contar(){

      contador++
      mensagem = contador < 10 ? 'Valor baixo' : 'Valor alto'
      console.log(contador)
      console.log(mensagem)

  }

  return (
    <>
      
        <button
          type="button"
          className="counter"
          onClick={Contar}
        >
          Count is {contador}
        </button>
      
    </>
  )
}

export default App

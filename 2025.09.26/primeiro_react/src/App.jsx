import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pixel from './assets/pixel_art.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World {2+2}</h1>
      <h2>Data:{Date()}</h2>
        <a href="https://google.com.br" id="link"> Google </a>

        <ul class="lista">
          <li>SEGUNDA</li>
          <li>TERÇA</li>
          <li>QUARTA</li>
        </ul>

        <img src='/hollow.png'></img>
        <img src='/pixel_art.jpg'></img>

        <ol class="lista">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
        </ol>
        <img src={pixel}></img>
    </div>
  )
}

export default App

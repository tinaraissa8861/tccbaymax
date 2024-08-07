import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fundoimg from './assets/image 4.png'

function App() {
  return (
      <body class="bg-blue-950">
        <h1 class="bg-current	">BAYMAX!</h1>
        <img src="" alt="" />
        <header class=''>
          <a href="">HOME</a>
          <a href="">EQUIPAMENTOS</a>
          <a href="">SOBRE</a>
          <a href="">PARTICIPANTES</a>
        </header>
        <img src={fundoimg} alt="img fundo" />
        <p className='bg-blue-950'>Assim como no filme Big hero o personagem Baymax tem o objetivo de auxiliar na sua saúde. o robo vem com a intenção de tornar seu dia a dia mais pratico e funcional venha conhecer mais sobre.</p>
      </body>

  )
}

export default App


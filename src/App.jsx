import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AppRouter from './AppRouter'
import PokemonProvider from './context/PokemonProvider'

function App() {

  return  (
    <PokemonProvider>
      <AppRouter/>
    </PokemonProvider>
  )
}

export default App

import React from 'react'
import { Navigation } from '../components/Navigation'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import PokemonList from '../components/PokemonList'
import Footer from '../components/Footer'

export const HomePage = () => {
  return (
    <>
    <div className='homepage-bg'>
         
            <Navbar/>
            <PokemonList/>
            <Footer  isPokemonPage={false}/>
    </div>
    
</>
  )
}

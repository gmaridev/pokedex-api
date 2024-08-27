import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function Navbar() {
  const variants = {
    initial: { opacity: 1 },
    animate: { scale: 1.1 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };
  return (
    <>
    
    <header className='container'>
    <motion.div
    variants={variants}
    animate="animate"
    exit="exit"
  >
       <Link to='/'>
        
     
          <div className='homepage-presentation'>
            <img src="https://concordeeducation.com/games/wp-content/uploads/sites/3/2022/08/Pokemon-Logo.png" alt="Logo pokemon" className='homepage-logo'/>
            </div>
            </Link>
    <ul className='nav-menu'>
        <li  className='nav-link'><a href="/">Home</a></li>
        <li className='nav-link'><a href="#">About</a></li>
        <li className='nav-link'><a href="https://pokeapi.co/">Docs</a></li>
        <li className='nav-link'><a href="#">Media</a></li>
    
    </ul>
    </motion.div>
</header>
</>
  )
}

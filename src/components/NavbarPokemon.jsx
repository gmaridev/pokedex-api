import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
function NavbarPokemon() {
  const variants = {
    animate: { scale: 1.1 },
    exit: { transition: { duration: 0.5 } },
  };
  return (
    <>
    <motion.div
    variants={variants}
    animate="animate"
    exit="exit"
  >
    <header className="container-pokemon">
    <Link to='/'>
      <img
        src="https://concordeeducation.com/games/wp-content/uploads/sites/3/2022/08/Pokemon-Logo.png"
        alt="Logo pokemon"
        className="nav-logo"
      />
      </Link>
      <ul className="nav-menu-pokemon">
        <li className="nav-link">
          <a href="/">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="https://pokeapi.co/">Docs</a>
        </li>
        <li className="nav-link">
          <a href="#">Media</a>
        </li>
      </ul>
     
    </header>
    </motion.div>
    </>
  );
}

export default NavbarPokemon;

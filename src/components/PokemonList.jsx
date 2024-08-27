import React, { useContext, useRef } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import SliderPokemon from './SliderPokemon'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from 'framer-motion';


function PokemonList() {

   const {allPokemons} = useContext(PokemonContext)
   console.log(allPokemons)
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: false

};
  return (
    <>
        <div className='slider-tab-pokemon container'>
        <Slider {...settings} >
        
        {allPokemons.map(pokemon => (
          <SliderPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
          
      </Slider>
        </div>
    </>
  )
}

export default PokemonList
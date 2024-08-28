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
    arrows: false,
    responsive: [
      {
        breakpoint: 1025, // Tamaño de pantalla para dispositivos móviles
        settings: {
          
          slidesToShow: 3, // Mostrar 3 pokemones
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1246, // Tamaño de pantalla para dispositivos móviles
        settings: {
          slidesToShow: 5, // Mostrar 3 pokemones
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1281, // Tamaño de pantalla para dispositivos móviles
        settings: {
          slidesToShow: 4, // Mostrar 3 pokemones
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 769, // Tamaño de pantalla para dispositivos móviles
        settings: {
          slidesToShow: 2, // Mostrar 3 pokemones
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Tamaño de pantalla para dispositivos más pequeños
        settings: {
          slidesToShow: 2, // Mostrar 2 pokemones
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 413, // Tamaño de pantalla para dispositivos más pequeños
        settings: {
          slidesToShow: 1, // Mostrar 2 pokemones
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376, // Tamaño de pantalla para dispositivos más pequeños
        settings: {
          slidesToShow: 2, // Mostrar 2 pokemones
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 361, // Tamaño de pantalla para dispositivos más pequeños
        settings: {
          slidesToShow: 1, // Mostrar 2 pokemones
          slidesToScroll: 1,
        },
      },
    ],

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
import React from "react";
import { Link } from "react-router-dom";
export default function SliderPokemon({ pokemon }) {
  
  return (
    <Link to={`pokemon/${pokemon.id}`} className="slider-pokemon">
      
      <div className="slider-card">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>
     
    </Link>
  );
}

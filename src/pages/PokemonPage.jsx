import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Loader from "../components/Loader";
import NavbarPokemon from "../components/NavbarPokemon";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import { motion} from "framer-motion";
import typeIcons from "../components/icons/icon-type";
import { primerMayuscula } from "../helpers/helper";

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  const variants = {
    zoom: { scale: 1.5, transition: { duration: 0.5 } },
    inZoom: { scale: 1.1, transition: { duration: 0.5 } },
  };

  const fetchPokemon = async (id) => {
    setLoading(true);
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setLoading(false)
    },0);
    return () => clearTimeout(timeout)
  },[pokemon])
  
  const handleNextPokemon = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= 20) {
      navigate(`/pokemon/${nextId}`);
    } else {
      setIsButtonDisabled(true);
      console.log("No existe el Pokémon con ese ID");
    }
  };

  if (loading || !pokemon) return <Loader />; 

  return (
    <>
      <body className={`${pokemon.name}`}>
        <main>
          <NavbarPokemon />
          <div className="container-stats">
          <motion.div
              variants={variants}
               animate={isZoomed ? "zoom" : "inZoom"}
              >
            {pokemon.sprites?.other?.dream_world?.front_default && (
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon.name}`}
                className="pokemon-photo"
              />
            )}
            </motion.div>
            <div className="buttons">
              {pokemon.types.map((type) => (
                
                <button key={type.type.name} className={`${type.type.name}`}>
                  <img src={typeIcons[type.type.name]} className="type-icon" /> 
                </button>
                
              ))}
              
            </div>
            <div className="info">
              <span className="pokemon-description-id">#{pokemon.id}</span>
              <h2 className="pokemon-description-name">{primerMayuscula(pokemon.name)}</h2>
              </div>
            <div className="stats">
              
              <div className="powers-stats">
              <div className="stat-group">
                <span>HP</span>
                <progress value={pokemon.stats[0].base_stat / 100}/>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <progress value={pokemon.stats[1].base_stat / 100}/>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <progress value={pokemon.stats[2].base_stat / 100}/>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <progress value={pokemon.stats[3].base_stat / 100}/>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <progress value={pokemon.stats[4].base_stat / 100}/>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <progress value={pokemon.stats[5].base_stat / 100} />
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
              </div>
            </div>
          </div>
        </main>
        <ArrowButton onClick={handleNextPokemon} disabled={isButtonDisabled} />
       
      </body>
    </>
  );
};

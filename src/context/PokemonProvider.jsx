import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export default function PokemonProvider({ children }) {
  const [allPokemons, setAllPokemons] = useState([]);

  //Estados de aplicación simplies
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0);
  //Llamar a los 50 pokemons a la api
  const get50Pokemons = async (limit = 20) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const promise = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promise);
    setLoading(false)

    setAllPokemons([...allPokemons,...results]);  //Combinar dos arreglos 
  };
  //Llamar a un pokemon por id
  const getPokemonById = async(id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`)
    const data = await res.json()
    return data
  }

  useEffect(() => {
    get50Pokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
       allPokemons,
       getPokemonById,
       loading,
       setLoading
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

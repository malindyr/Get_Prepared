import React from 'react'
import PokemonListing from './PokemonListing'
import {useState, useEffect} from 'react'; 
import { TbUrgent } from 'react-icons/tb';

//jobs

const PokemonListings = ({isHome = false}) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    //usefecct takes in a function and a dependency array
    const fetchPokemon = async () => {
    try{
      const response = await fetch('https://localhost:7262/api/Pokemon');
      const data = await response.json();

      const limitedData = isHome ? data.slice(0, 3) : data;

      setPokemons(limitedData);
    } catch (error){
      console.error('failed to fetch pokemon:', error);
    } finally {
      setLoading(false);
    }
    }
    fetchPokemon();
    }, [])

  return (
    <section className="bg-pearlPink-100 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-pearlPink-500 mb-6 text-center">
        {isHome ? 'Discover Pokémon' : 'Pokémon Pearl -- Generation IV Pokémon'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (<h2>Loading...</h2>) :
          (<>
            {pokemons.map((pokemon) => (
            <PokemonListing key={pokemon.id} pokemon={pokemon}/>
            ))};
          </>) }
      </div>
    </div>
  </section>
  )
}

export default PokemonListings

//used to be PokemonData here but is now Pokemon
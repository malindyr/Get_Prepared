import React from 'react'
import Pokemon from '../pokemon.json'
import PokemonListing from './PokemonListing'

//jobs

const PokemonListings = ({isHome = false}) => {
  const pokemonListings = isHome ? Pokemon.slice(0,3) : Pokemon;

  return (
    <section className="bg-pearlPink-100 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-pearlPink-500 mb-6 text-center">
        {isHome ? 'Discover Pokémon' : 'Pokémon Pearl - Gen IV Pokémon'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pokemonListings.map((pokemon) => (
          <PokemonListing key={pokemon.Id} pokemon={pokemon}/>
        ))};

      </div>
    </div>
  </section>
  )
}

export default PokemonListings

//used to be PokemonData here but is now Pokemon
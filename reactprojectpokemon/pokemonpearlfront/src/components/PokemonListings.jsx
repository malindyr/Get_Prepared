import React from 'react'
import PokemonData from '../pokemon.json'

//jobs

const PokemonListings = () => {
  return (
    <section className="bg-pearlPink-100 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-pearlPink-500 mb-6 text-center">
      Discover Pokémon
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PokemonData.map((pokemon) => (
            <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{pokemon.type}</div>
                <h3 className="text-xl font-bold">{pokemon.name}</h3>
              </div>
  
              <div className="mb-5">
              {pokemon.description}
              </div>
  
              <h3 className="text-pearlPink-500 mb-2">#{pokemon.number}</h3>
  
              <div className="border border-gray-100 mb-5"></div>
  
              <div className="flex flex-col lg:flex-row justify-between mr-8 ml-5">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  <img
                 src={pokemon.imageUrl}
                 alt={pokemon.name} /*fallback text*/ 
                 className="w-20 h-20 object-cover rounded-lg"/>
                </div>
                <a
                  href={`/PokemonData/${pokemon.id}`}
                  className="h-[36px] bg-pearlPink-800 hover:bg-pearlPink-600 text-white px-4 py-2 rounded-lg text-center text-sm "
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        ))};

      </div>
    </div>
  </section>
  )
}

export default PokemonListings
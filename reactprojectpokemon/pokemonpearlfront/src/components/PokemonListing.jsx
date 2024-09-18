import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const PokemonListing = ({pokemon}) => {

    const [showFullDescription, setShowFullDescription] = 
        useState(false);

    let Description = pokemon.Description;

    if(!showFullDescription){
        Description = Description.substring(0, 90) + '...';
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{pokemon.Type}</div>
        <h3 className="text-xl font-bold">{pokemon.Name}</h3>
      </div>

      <div className="mb-5">{Description}</div>

      <button 
        onClick={() => setShowFullDescription((prevState) =>
        !prevState)}
        className='text-pearlPink-800 mb-5 hover:text-pearlPink-1000'>
        {showFullDescription ? 'Less' : 'More'}
      </button>

      <h3 className="text-pearlPink-500 mb-2">#{pokemon.Number}</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mr-8 ml-5">
        <div className="text-orange-700 mb-3">
          <i className="fa-solid fa-location-dot text-lg"></i>
          <img
         src={pokemon.ImageUrl}
         alt={pokemon.Name} /*fallback text*/ 
         className="w-20 h-20 object-cover rounded-lg"/>
        </div>
        <Link
          to={`/Pokemon/${pokemon.Id}`}
          className="h-[36px] bg-pearlPink-800 hover:bg-pearlPink-600 text-white px-4 py-2 rounded-lg text-center text-sm "
        >
         Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default PokemonListing
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useParams, useLoaderData } from 'react-router-dom';

const PokemonPage = ({ deletePokemon }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const pokemon = useLoaderData();

    const onDeleteClick = (pokemonId) => {
      const confirm = window.confirm('Are you sure you want to delete this Pokémon?');

      if(!confirm) return;

      deletePokemon(pokemonId);

      toast.success('Pokémon deleted successfully')

      navigate('/pokemons');
    }

  return  <>
      <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/pokemons"
          className="text-pearlPink-500 hover:text-pearlPink-600 flex items-center"
        >
         <FaArrowLeft className='mr-2'/> Back to All Pokémon 
        </Link>
      </div>
    </section>

    <section className="bg-pearlPink-100">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">#{pokemon.number}</div>
              <h1 className="text-5xl font-bold mb-4">
               {pokemon.name}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
               <img className='ml-40' src={pokemon.imageUrl} alt={pokemon.name} />
              </div>
            </div>
          </main>

      
          <aside>
     
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-pearlPink-600 text-xl font-bold mb-2">Pokémon number #{pokemon.number}</h3>

              <h2 className="text-4xl mb-2">{pokemon.name}</h2>

              <h3 className="mt-7 text-pearlPink-800 text-lg font-bold mb-3">
                About {pokemon.name}:
              </h3>

              <p className="mb-4">
                {pokemon.description}
              </p>
                
              <h3 className="text-pearlPink-800 text-lg font-bold">Type:</h3>

              <p className="mb-4">{pokemon.type}</p>

              <hr className="my-4" />

              <h3 className="text-xl">Height: {pokemon.height}m</h3>

              <h3 className="text-xl">Weight: {pokemon.weight}kg</h3>

    
            </div>

         
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Pokémon</h3>
              <Link
                to={`/edit-pokemon/${pokemon.id}`}
                className="bg-pearlPink-700 hover:bg-pearlPink-900 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit {pokemon.name} Info
              </Link>
              <button
                onClick={() => onDeleteClick(pokemon.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete {pokemon.name} from Pokédex
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </> 
}

const pokemonLoader = async ({ params }) => {
    const response = await fetch(`https://localhost:7262/api/Pokemon/Pokemon/Id/${params.id}`);
    const data = await response.json();
    return data;
}

export  { PokemonPage as default, pokemonLoader}
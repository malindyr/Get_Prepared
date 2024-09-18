import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try{
                const response = await fetch(`https://localhost:7262/api/Pokemon/Pokemon/Id/${id}`);
                const data = await response.json();
          
                setPokemon(data);
              } catch (error){
                console.error('failed to fetch pokemon:', error);
              } finally {
                setLoading(false);
              }
        }
        fetchPokemon();
    }, [])
  return (
    loading ? <h2>Loading...</h2> : (
        <h1>{pokemon.name}</h1>
    )
  )
}


export default PokemonPage
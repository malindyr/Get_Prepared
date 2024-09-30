import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import PokemonListings from '../components/PokemonListings'
import ViewAllPokemon from '../components/ViewAllPokemon'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <PokemonListings isHome={true}/>
        <ViewAllPokemon/>
    </>
  )
}

export default HomePage

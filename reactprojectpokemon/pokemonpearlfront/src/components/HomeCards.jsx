import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
        <h2 className="text-2xl font-bold">Complete Pokédex </h2>
          <p className="mt-2 mb-4">
            Browse through all  4th Gen Pokémon
          </p>
          <Link
            to="/pokemons"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            View All Pokémon
          </Link>
        </Card>
        <Card bg='bg-pearlPink-200'>
        <h2 className="text-2xl font-bold">Missing Pokémon?</h2>
          <p className="mt-2 mb-4">
            Add a Pokémon to the Pokédex! 
          </p>
          <Link
            to="/add-pokemon"
            className="inline-block bg-pearlPink-900 text-white rounded-lg px-4 py-2 hover:bg-pearlPink-600"
          >
            Add Pokémon
          </Link>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards
import { useState, useEffect } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import PokemonPage, { pokemonLoader } from './pages/PokemonPage';
import AddPokemonPage from './pages/AddPokemonPage'
import EditPokemonPage from './pages/EditPokemonPage';

function App() {
  //POST
  const addPokemon = async (newPokemon) => {
    const response = await fetch('https://localhost:7262/api/Pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon),
  });
    return;
  };

  //PUT
  const updatePokemon = async (pokemon) => {
    const response = await fetch(`https://localhost:7262/api/Pokemon/${pokemon.id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon),
  });
    return;
  }
  
  //DELETE
  const deletePokemon = async (id) => {
    const response = await fetch(`https://localhost:7262/api/Pokemon/${id}`, {
      method: 'DELETE',
    });
      return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/pokemons' element={<PokemonsPage/>}/> 
        <Route path='/pokemon/:id' element={<PokemonPage deletePokemon={deletePokemon}/>} loader={pokemonLoader}/>  
        <Route path='/add-pokemon' element={<AddPokemonPage addPokemonSubmit={addPokemon}/>}/> 
        <Route path='/edit-pokemon/:id' element={<EditPokemonPage updatePokemonSubmit={updatePokemon}/>} loader={pokemonLoader}/>
        <Route path='*' element={<NotFoundPage/>}/> 
      </Route>
      )
  )
  return <RouterProvider router={router}/>
}

export default App

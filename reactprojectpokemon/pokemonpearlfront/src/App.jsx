import { useState, useEffect } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import PokemonPage from './pages/PokemonPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/pokemons' element={<PokemonsPage/>}/> 
      <Route path='/pokemon/:id' element={<PokemonPage/>}/>  
      <Route path='*' element={<NotFoundPage/>}/> 
    </Route>
    )
)

function App() {

  return <RouterProvider router={router}/>
}

export default App

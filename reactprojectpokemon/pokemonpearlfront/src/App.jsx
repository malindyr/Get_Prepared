import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/pokemons' element={<PokemonsPage/>}/>  
      <Route path='*' element={<NotFoundPage/>}/> 
    </Route>
    
    )
)



function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App

import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchbar, setSearchbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  // Handle form submission for search
  const handleSearch = async (e) => {
    e.preventDefault();
      try{
        const response = await fetch(`https://localhost:7262/api/Pokemon/Pokemon/Name/${searchTerm}`)

        if(!response.ok){
          throw new Error('pokemon not found')
        }

          const data = await response.json();

          toast.success(`Pokémon found!`)

          navigate(`/pokemon/${data.id}`);
      } catch (error) {
          toast.error('Pokémon not found')
      } finally {
          setSearchTerm('');
          setSearchbar(false);
      }
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="bg-pearlPink border-b border-pearlPink-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Pokémon Pearl Pokédex
              </span>
            </NavLink>

            <div className="md:ml-auto flex items-center space-x-2">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/pokemons" className={linkClass}>
                Pokémon
              </NavLink>
              <NavLink to="/add-pokemon" className={linkClass}>
                Add Pokémon
              </NavLink>
              <button
                onClick={() => setSearchbar(!searchbar)}
                className={linkClass({ isActive: false })}
              >
                Search by name
              </button>

              {/*search bar inline with navlinks */}
              {searchbar && (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter Pokémon name"
                    className="ml-2 px-2 py-1 border rounded-md focus:outline-none focus:ring"
                  />
                  <button
                    type="submit"
                    className="ml-2 px-3 py-1 bg-black text-white rounded-md"
                  >
                    Search
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
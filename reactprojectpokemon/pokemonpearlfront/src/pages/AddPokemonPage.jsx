import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPokemonPage = ({ addPokemonSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newPokemon = {
      name,
      number,
      type,
      height,
      weight,
      description,
      imageUrl,
    };
    addPokemonSubmit(newPokemon);

    toast.success('Pokémon Added Successfully!')

    return navigate('/pokemons')
    
  };

  return (
    <section className="bg-pearlPink-100">
    <div className="container m-auto max-w-2xl py-24">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitForm}>
          <h2 className="text-3xl text-center font-semibold mb-6">Add Pokémon</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Pokémon Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 font-bold mb-2"
              >Number</label
            >
            <input
              type='number'
              id="number"
              name="number"
              className="border rounded w-full py-2 px-3"
              placeholder="ex 150"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Type</label
            >
            <input
              type="text"
              id="type"
              name="type"
              className="border rounded w-full py-2 px-3"
              placeholder="Pokémon Type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="height" className='block text-gray-700 font-bold mb-2'>
              Height
            </label>
            <input
              type='number'
              id='height'
              name='height'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='ex 0,5'
              step='0.1'
              required      
              value={height}
              onChange={(e) => setHeight(e.target.value)}     
            />
          </div>

          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-bold mb-2"
              >Weight</label
            >
            <input
              type='number'
              id="weight"
              name="weight"
              className="border rounded w-full py-2 px-3"
              placeholder="ex 1,2"
              step='0.1'
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Write your Pokémon's information here..."
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

 
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-bold mb-2"
              >Image Url</label
            >
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="border rounded w-full py-2 px-3"
              placeholder="Paste full image url here"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div>
            <button
              className="bg-pearlPink-700 hover:bg-pearlPink-900 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Pokémon To Pokédex
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddPokemonPage
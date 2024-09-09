using System.Diagnostics.Metrics;
using Microsoft.AspNetCore.Mvc;
using PokemonPearlPokedex.Dtos;
using PokemonPearlPokedex.Interfaces;
using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {
        private readonly IPokemonRepository _pokemonRepository;

        public PokemonController(IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Pokemon>))]

        public IActionResult GetPokemons()
        {
            var pokemons = _pokemonRepository.GetPokemons();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemons);
        }

        [HttpGet("Pokemon/Id/{pokeId}")]
        [ProducesResponseType(200, Type = typeof(Pokemon))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonId(int pokeId)
        {
            if (!_pokemonRepository.PokemonIdExists(pokeId))
                return NotFound();

            var pokemon = _pokemonRepository.GetPokemonById(pokeId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemon);
        }

        [HttpGet("Pokemon/Name/{pokeName}")]
        [ProducesResponseType(200, Type = typeof(Pokemon))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonName(string pokeName)
        {
            if (!_pokemonRepository.PokemonNameExists(pokeName))
                return NotFound();

            var pokemon = _pokemonRepository.GetPokemonByName(pokeName);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemon);
        }

        [HttpGet("Pokemon/Number/{pokeNumber}")]
        [ProducesResponseType(200, Type = typeof(Pokemon))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonNumber(int pokeNumber)
        {
            if (!_pokemonRepository.PokemonNumberExists(pokeNumber))
                return NotFound();

            var pokemon = _pokemonRepository.GetPokemonByNumber(pokeNumber);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemon);
        }

        [HttpGet("Pokemon/Type/{pokeType}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Pokemon>))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonsType(string pokeType)
        {
            if (!_pokemonRepository.PokemonTypeExists(pokeType))
                return NotFound();

            var pokemons = _pokemonRepository.GetPokemonsByType(pokeType);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemons);
        }

        [HttpPost]
        [ProducesResponseType(204)] //CORRECT thank you
        [ProducesResponseType(400)] //bad request
        [ProducesResponseType(422)] //unprocessable, won't do it
        [ProducesResponseType(500)] //please no, please
        public IActionResult CreatePokemon([FromBody] PokemonDto pokemonCreate)
        {
            if (pokemonCreate == null)
                return BadRequest(ModelState);

            var existingPokemon = _pokemonRepository.GetPokemons()
                .Where(c => c.Name.Trim().ToUpper() == pokemonCreate.Name.Trim().ToUpper())
                .FirstOrDefault();

            if (existingPokemon != null)
            {
                ModelState.AddModelError("", "pokemon already exists");
                return StatusCode(422, ModelState);
            }

            var pokemon = new Pokemon
            {
                Name = pokemonCreate.Name,
                Number = pokemonCreate.Number,
                Type = pokemonCreate.Type,
                Height = pokemonCreate.Height,
                Weight = pokemonCreate.Weight,
                Description = pokemonCreate.Description,
                ImageUrl = pokemonCreate.ImageUrl,
            };

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_pokemonRepository.CreatePokemon(pokemon))
            {
                ModelState.AddModelError("", "something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("successfully created");

        }

        [HttpPut("{pokeId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdatePokemon(int pokeId, [FromBody] Pokemon updatedPokemon)
        {
            if (updatedPokemon == null)
                return BadRequest(ModelState);

            if (pokeId != updatedPokemon.Id)
                return BadRequest(ModelState);

            if (!_pokemonRepository.PokemonIdExists(pokeId))
                return NotFound();

            var existingPokemon = _pokemonRepository.GetPokemonById(pokeId);

            if (existingPokemon == null)
                return NotFound();

            existingPokemon.Name = updatedPokemon.Name;
            existingPokemon.Number = updatedPokemon.Number;
            existingPokemon.Type = updatedPokemon.Type;
            existingPokemon.Height = updatedPokemon.Height;
            existingPokemon.Weight = updatedPokemon.Weight;
            existingPokemon.Description = updatedPokemon.Description;
            existingPokemon.ImageUrl = updatedPokemon.ImageUrl;

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_pokemonRepository.UpdatePokemon(existingPokemon))
            {
                ModelState.AddModelError("", "something went wrong updating pokemon");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpDelete("{pokeId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeletePokemon(int pokeId)
        {
            if (!_pokemonRepository.PokemonIdExists(pokeId))
            {
                return NotFound();
            }

            var pokemonToDelete = _pokemonRepository.GetPokemonById(pokeId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_pokemonRepository.DeletePokemon(pokemonToDelete))
            {
                ModelState.AddModelError("", "something went wrong deleting pokemon");
            }

            return NoContent();
        }


    }
}

using PokemonPearlPokedex.Data;
using PokemonPearlPokedex.Interfaces;
using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex.Repositories
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly DataContext _context;

        public PokemonRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<Pokemon> GetPokemons() //tolist is importabt, be explicit about what you're returning
        {
            return _context.Pokemons.OrderBy(p => p.Id).ToList();
        }

        public Pokemon GetPokemonById(int id)
        {
            return _context.Pokemons.Where(p => p.Id == id).FirstOrDefault();
        }

        public Pokemon GetPokemonByName(string name)
        {
            return _context.Pokemons.Where(p => p.Name == name).FirstOrDefault();
        }

        public ICollection<Pokemon> GetPokemonsByType(string type)
        {
            return _context.Pokemons.Where(p => p.Type == type).OrderBy(p=> p.Number).ToList();
        }

        public Pokemon GetPokemonByNumber(int pokeNumber)
        {
            return _context.Pokemons.Where(p => p.Number == pokeNumber).FirstOrDefault();
        }

        public bool PokemonExists(int pokeId)
        {
            return _context.Pokemons.Any(p => p.Id == pokeId);
        }
    }
}

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
            return _context.Pokemons
                .Where(p => p.Name.ToLower() == name.ToLower())
                .FirstOrDefault();
        }
        public Pokemon GetPokemonByNumber(int pokeNumber)
        {
            return _context.Pokemons.Where(p => p.Number == pokeNumber).FirstOrDefault();
        }

        public ICollection<Pokemon> GetPokemonsByType(string type)
        {
            return _context.Pokemons
                .Where(p => p.Type.ToLower() == type.ToLower())
                .OrderBy(p => p.Number)
                .ToList();
        }



        //confirmation
        public bool PokemonIdExists(int pokeId)
        {
            return _context.Pokemons.Any(p => p.Id == pokeId);
        }
        public bool PokemonNumberExists(int pokeNumber)
        {
            return _context.Pokemons.Any(p => p.Number == pokeNumber);
        }

        public bool PokemonNameExists(string pokeName)
        {
            return _context.Pokemons
                .Any(p => p.Name.ToLower() == pokeName.ToLower());
        }

        public bool PokemonTypeExists(string pokeType)
        {
            return _context.Pokemons
                .Any(p => p.Type.ToLower() == pokeType.ToLower());
        }

        public bool CreatePokemon(Pokemon pokemon)
        {
            _context.Add(pokemon);
            return Save();
        }

        public bool UpdatePokemon(Pokemon pokemon)
        {
            _context.Update(pokemon);
            return Save();
        }

        public bool DeletePokemon(Pokemon pokemon)
        {
            _context.Remove(pokemon);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}

using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex.Interfaces
{
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons();
        Pokemon GetPokemonById(int id);
        Pokemon GetPokemonByName(string name);
        ICollection<Pokemon> GetPokemonsByType(string type);
        Pokemon GetPokemonByNumber(int pokeNumber);
        bool PokemonExists(int pokeId);
    }
}

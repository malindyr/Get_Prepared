using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex.Interfaces
{
    public interface IPokemonRepository
    {
        //get
        ICollection<Pokemon> GetPokemons();
        Pokemon GetPokemonById(int id);
        Pokemon GetPokemonByName(string name);
        ICollection<Pokemon> GetPokemonsByType(string type);
        Pokemon GetPokemonByNumber(int pokeNumber);

        //confirmation
        bool PokemonIdExists(int pokeId);
        bool PokemonNumberExists(int pokeNumber);
        bool PokemonNameExists(string name);
        public bool PokemonTypeExists(string pokeType);

        //create
        bool CreatePokemon(Pokemon pokemon);

        //update
        bool UpdatePokemon(Pokemon pokemon);

        //delete
        bool DeletePokemon(Pokemon pokemon);


        bool Save();

    }
}

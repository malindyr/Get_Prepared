using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Interfaces
{
    //always start with the interfaces, the interfaces are the blueprint
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons(); //plural (s) because we are returning a list
        Pokemon GetPokemon(int id);
        Pokemon GetPokemon(string name);
        decimal GetPokemonRating(int pokeId);
        bool PokemonExists(int pokeId);

        //the more relationships your database has, the more difficult creation is going to be
        bool CreatePokemon(int ownerId, int categoryId, Pokemon pokemon);
        bool UpdatePokemon(int ownerId, int categoryId, Pokemon pokemon);
        bool DeletePokemon(Pokemon pokemon);
        bool Save();
    }
}

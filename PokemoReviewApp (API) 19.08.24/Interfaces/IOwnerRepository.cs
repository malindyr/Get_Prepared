using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Interfaces
{
    public interface IOwnerRepository
    {
        ICollection<Owner> GetOwners();
        Owner GetOwner(int ownerId);
        ICollection<Owner> GetOwnerOfAPokemon(int pokeId);
        ICollection<Pokemon> GetPokemonByOwner(int ownerId);
        bool OwnerExists(int ownerId);
        bool CreateOwner(Owner owner);
        bool UpdateOwner(Owner owner);
        bool DeleteOwner(Owner owner);
        bool Save();

    }
}

//ienumerable is the most bare bones version of collections in c# and icollection is kind of an intermediary or a middleground between ienumerable and a list. a list is the most full featured. 

using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Dto
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        //why was this here, this is the reason for all the callbacks that were in the api
       // public ICollection<PokemonCategory> PokemonCategories { get; set; }
    }
}

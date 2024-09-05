namespace PokemonPearlPokedex.Models
{
    public class Pokemon
    {
        public int Id { get; set; } 
        public string Name { get; set; } 
        public int Number { get; set; } 
        public string Type { get; set; } 
        public decimal Height { get; set; } 
        public decimal Weight { get; set; } 
        public string Description { get; set; } 
        public string ImageUrl { get; set; } 
    }
}

using Microsoft.EntityFrameworkCore;
using PokemonPearlPokedex.Data;
using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex
{
    public class Seed
    {
        private readonly DataContext dataContext;
        public Seed(DataContext context)
        {
            this.dataContext = context;
        }

        public void SeedDataContext()
        {
            dataContext.Database.EnsureCreated();

            if (dataContext.Pokemons.Any())
            {
                return; 
            }

            // initial data
            var pokemons = new List<Pokemon>
            {
                new Pokemon
                {
                    Name = "Piplup",
                    Number = 393,
                    Type = "Water",
                    Height = 0.40m,
                    Weight = 5.2m,
                    Description = "The Penguin Pokémon. It lives near water and is known for its sturdy constitution.",
                    ImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
                },
                new Pokemon
                {
                    Name = "Shinx",
                    Number = 403,
                    Type = "Electric",
                    Height = 0.50m,
                    Weight = 9.5m,
                    Description = "The Flash Pokémon. It has the ability to generate electricity and is known for its glowing mane.",
                    ImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
                },
                new Pokemon
                {
                    Name = "Bidoof",
                    Number = 399,
                    Type = "Normal",
                    Height = 0.60m,
                    Weight = 20.0m,
                    Description = "The Plump Mouse Pokémon. It uses its teeth to build dams and lodges in rivers.",
                    ImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
                },
                new Pokemon
                {
                    Name = "Starly",
                    Number = 396,
                    Type = "Normal/Flying",
                    Height = 0.30m,
                    Weight = 2.0m,
                    Description = "The Starling Pokémon. It lives in flocks and is known for its ability to migrate.",
                    ImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
                },
                new Pokemon
                {
                    Name = "Zubat",
                    Number = 41,
                    Type = "Poison/Flying",
                    Height = 0.80m,
                    Weight = 7.5m,
                    Description = "The Bat Pokémon. It uses echolocation to navigate dark caves and can drain energy from others.",
                    ImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
                }
            };

            dataContext.Pokemons.AddRange(pokemons);
            dataContext.SaveChanges();
        }
    }
}

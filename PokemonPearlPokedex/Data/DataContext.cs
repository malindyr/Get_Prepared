using Microsoft.EntityFrameworkCore;
using PokemonPearlPokedex.Models;

namespace PokemonPearlPokedex.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Pokemon> Pokemons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the precision and scale for decimal properties
            modelBuilder.Entity<Pokemon>()
                .Property(p => p.Height)
                .HasColumnType("decimal(5, 2)"); // Precision: 5, Scale: 2

            modelBuilder.Entity<Pokemon>()
                .Property(p => p.Weight)
                .HasColumnType("decimal(5, 2)"); // Precision: 5, Scale: 2

        }
    }
}

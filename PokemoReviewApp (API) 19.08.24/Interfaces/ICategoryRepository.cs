using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Interfaces
{
    public interface ICategoryRepository
    {
        ICollection<Category> getCategories();
        Category getCategory(int id);
        ICollection<Pokemon> GetPokemonByCategory(int categoryId);
        bool CategoryExists(int id);
        bool CreateCategory(Category category);
        bool UpdateCategory(Category category);
        bool DeleteCategory(Category category);
        bool Save();
    }
}

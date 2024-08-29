using _19._08._24_attempt_5.Data;
using _19._08._24_attempt_5.Interfaces;
using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryRepository(DataContext context)
        {
            _context = context;
        }
        public bool CategoryExists(int id)
        {
            return _context.Categories.Any(c=> c.Id == id);
        }
        public ICollection<Category> getCategories() //icollection = list
        {
            return _context.Categories.ToList();
        }

        public Category getCategory(int id) //category = 1, henve firstordefault
        {
            return _context.Categories.Where(e => e.Id == id).FirstOrDefault();
        }

        public ICollection<Pokemon> GetPokemonByCategory(int categoryId)
        {
            return _context.PokemonCategories.Where(e => e.CategoryId == categoryId).Select(c => c.Pokemon).ToList();
        }

        public bool CreateCategory(Category category)
        {
            //change tracker
            //is this adding, updating, modifying
            //they can be connected or disconnected. 99% of the time your state is going to be connected
            //if you ever see "entitystate.added" or something like that, you are using a disconnected state and you need to be cognizant of that

            //this is what is going to start tracking your entity
            //entity framework is putting this in the database for you
            _context.Add(category);
            return Save();
        }

        public bool UpdateCategory(Category category)
        {
            _context.Update(category);
            return Save();
        }

        public bool DeleteCategory(Category category)
        {
            _context.Remove(category);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges(); //save changes returns an int
            return saved > 0 ? true : false;
        }
    }
}

using _19._08._24_attempt_5.Model;

namespace _19._08._24_attempt_5.Interfaces
{
    //you use ienumerable when you just want to filter stuff
    //the one with the least amount of functionality
    //ienumerable list that icollection inherits off of

    //with icollection yoou can actually add and sort data, the median kind of

    //list has everything.
    public interface ICountryRepository
    {
        ICollection<Country> GetCountries();
        Country GetCountry(int id);
        Country GetCountryByOwner(int ownerId);
        ICollection<Owner> GetOwnersFromACountry(int countryId);
        bool CountryExists(int id);
        bool CreateCountry(Country country);
        bool UpdateCountry(Country country);
        bool DeleteCountry(Country country);
        bool Save();

    }
}

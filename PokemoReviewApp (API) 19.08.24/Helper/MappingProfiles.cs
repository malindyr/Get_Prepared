using _19._08._24_attempt_5.Dto;
using _19._08._24_attempt_5.Model;
using AutoMapper;

namespace _19._08._24_attempt_5.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles() //pokemon first, dto second = get request
        {
            CreateMap<Pokemon, PokemonDto>(); //get
            CreateMap<PokemonDto, Pokemon>(); //create

            CreateMap<Category, CategoryDto>(); //fetching
            CreateMap<CategoryDto, Category>(); //when you're updating, the dto is always going to be first

            CreateMap<Country, CountryDto>(); //getting
            CreateMap<CountryDto, Country>(); //creating

            CreateMap<Owner, OwnerDto>();//you get the gist
            CreateMap<OwnerDto, Owner>();//errorrrrr in creating if this is not hereee

            CreateMap<Review, ReviewDto>();
            CreateMap<ReviewDto, Review>();//forgot again

            CreateMap<Reviewer, ReviewerDto>();
            CreateMap<ReviewerDto, Reviewer>();//didn't forget this time
        }
    }
}

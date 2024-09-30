# **Pokemon Review App**

## **Project Description**
This project is an ASP.NET-based API developed as a 
learning exercise to gain a deeper understanding of how to build APIs,
and manage data relationships within ASP.NET Core. 
The application functions as a Pokémon review system, 
where users can review various Pokémon and interact with different 
entities such as Pokémon categories, owners, and reviewers.

The project uses several data relationships:

One-to-Many: A Pokémon can have many reviews, but each review belongs to one Pokémon.
Many-to-Many: Pokémon can belong to multiple categories, and categories can include multiple Pokémon through the PokemonCategory model. Similarly, Pokémon can have multiple owners, and owners can have multiple Pokémon through the PokemonOwner model.
One-to-One: Each review is associated with a single reviewer and one specific Pokémon.


## **Motivation**

My primary motivation was my passion for C#. 
I appreciate the language's strictness and precision, therefore,
when I set out to create a full-stack project, 
I was eager to use ASP.NET to build the backend.
I wanted to engage in a larger back-end project to further my skills, as I genuinely enjoy back-end development. 

This project served as a crucial stepping stone for me, 
allowing me to tackle challenges that would prepared me for future projects, 
such as my Pokédex app that came after this.


## **Features**

- **CRUD Operations**: 
  - Create, Read, Update, and Delete Pokémon entries.
  - Supports adding Pokémon along with owner and category associations.

- **Pokémon Ratings**: 
  - Retrieve and display ratings for individual Pokémon.
  - Review system to calculate average ratings based on user feedback.

- **Pokémon Search**: 
  - Search feature to find Pokémon by name.
  - Supports case-insensitive searching.

- **Data Mapping with AutoMapper**: 
  - Uses AutoMapper for data transfer between entities and DTOs.

- **Error Handling**: 
  - Provides error responses for validation errors and resource not found cases.

- **Dependency Injection**: 
  - dependency injection for code organization and unit testing.

- **Entity Framework Core**: 
  - Utilizes EF Core for interactions with SQL.

- **DTO Pattern**: 
  - Follows the Data Transfer Object pattern for separation of database and API models.

- **CORS Configuration**: 
  - Configured CORS for API access.

## **What I Learned**

During the development of this project, I gained extensive knowledge and skills in various areas:

- **CORS**: I learned what Cross-Origin Resource Sharing (CORS) is and how to configure it for secure API access.
- **CRUD Operations**: I understood the concept of Create, Read, Update, and Delete operations.
- **Data Seeding and Migrations**: I learned how to seed data, perform migrations, and understand the purpose of migrations in database management.
- **Repository Pattern**: I explored the repository pattern and its benefits in organizing data access logic.
- **HTTP Methods**: I became familiar with different HTTP methods such as POST and PUT, and their roles in API interactions.
- **Data Transfer Objects (DTOs)**: I learned about DTOs, their purpose, and why they are used in separating database models from API models.
- **NuGet Packages**: I discovered what NuGet packages are and how to manage them within my projects.
- **Collections**: I explored the differences between `IEnumerable`, `ICollection`, and `List`.
- **Entity Relationships**: I learned about one-to-many, many-to-many, and one-to-one relationships in databases.
- **Database Connectivity**: I gained experience in connecting to a SQL Server and interacting with databases using Entity Framework Core.
- **Swagger**: I learned how to use Swagger for interactive API documentation and testing.
- **Error Handling**: I understood various HTTP error codes, the use of `ModelState`, and how to return appropriate responses for bad requests.
- **AutoMapper**: I explored how to use AutoMapper for mapping between entities and DTOs.

## **Technologies Used**

- **ASP.NET Core**
- **Entity Framework Core**
- **SQL Server**
- **Swagger**
- **AutoMapper**
- **CORS**
- **NuGet Packages**

  
## **Challenges**
Migrations: I faced difficulties with migrations, particularly with the dotnet ef migrations command, which took considerable time to resolve. This was one of the most 
intimidating errors to me.
NuGet Package Issues: Implementing features was complicated due to missing NuGet packages, specifically the Entity Framework tools, which caused confusion when using ModelState.
Complex Relationships: I struggled with the intricate relationships in the models, especially in Pokemon.cs, which led to a lot of back and forth in Swagger to ensure 
everything worked as expected.

##**Future Enhancements**
- Gain a deeper understanding of Entity Framework's migration features.
- Enhance my grasp of complex relationships in data modeling to reduce development time and improve overall code quality.


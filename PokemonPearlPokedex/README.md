# Pokémon Pearl Pokédex API

## Project Description

The **Pokémon Pearl Pokédex Backend** is an ASP.NET-based API designed to manage and serve Pokémon data for the Pokémon Pearl Pokédex application. 
It provides full CRUD (Create, Read, Update, Delete) functionality for managing Pokémon entries and integrates with a React-based front end.

## Motivation

The goal of this backend project was to create a reliable and efficient API that complements the Pokémon Pearl Pokédex single-page application. 
It was an opportunity to enhance my skills in ASP.NET, API design, and data management, while delivering a functional and responsive service for a Pokémon-themed application.
I thoroughly enjoyed working on this backend project and I am very much looking forward to doing more backend projects in the future.

## Features

- **Get Pokémon Data**: Retrieve lists of Pokémon or individual Pokémon details by ID, name, number, or type.
  - `GET /api/Pokemon` - List all Pokémon
  - `GET /api/Pokemon/Id/{pokeId}` - Get Pokémon by ID
  - `GET /api/Pokemon/Name/{pokeName}` - Get Pokémon by Name
  - `GET /api/Pokemon/Number/{pokeNumber}` - Get Pokémon by Number
  - `GET /api/Pokemon/Type/{pokeType}` - Get Pokémon by Type

- **Create Pokémon**: Add new Pokémon to the database.
  - `POST /api/Pokemon` - Create a new Pokémon entry

- **Update Pokémon**: Modify existing Pokémon data.
  - `PUT /api/Pokemon/{pokeId}` - Update Pokémon details

- **Delete Pokémon**: Remove Pokémon from the database.
  - `DELETE /api/Pokemon/{pokeId}` - Delete Pokémon by ID

## Technologies Used

- **ASP.NET**: Framework for building the web API and managing data.
- **Entity Framework Core**: ORM for database interaction.
- **SQL Server**: Database management system.
- **Swagger**: Tool for API documentation and testing.
- **CORS**: Configuration for handling cross-origin requests.
- **Repository Pattern**: Design pattern used for managing data access.

## Project Structure

- **DataContext**: Configures the database context and entity mappings.
- **Models**: Defines the Pokémon data model.
- **Interfaces**: Contains repository interface for data operations.
- **Repositories**: Implements data operations as per the repository interface.
- **Controllers**: Manages API endpoints and request handling.
- **DTOs**: Data Transfer Objects for managing Pokémon data.

## Challenges and Future Enhancements

During development, challenges included configuring CORS, managing CRUD operations efficiently, 
and ensuring robust error handling. 
Future enhancements could include expanding the API to support additional features, improving error messages, and optimizing performance.

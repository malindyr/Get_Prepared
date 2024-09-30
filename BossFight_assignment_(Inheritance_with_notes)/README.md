# **C# Inheritance Example Project**

## **Overview**

This project demonstrates the use of inheritance in C# through a simple combat simulation between a `Hero` and a `Boss`. 
It highlights the basic concepts of inheritance, method overriding, and random number generation.

## **Project Structure**

- **GameCharacter**: The base class that defines common properties and methods for game characters.
- **Hero**: A subclass of `GameCharacter` representing the hero character.
- **Boss**: A subclass of `GameCharacter` representing the boss character.

## **Classes**

### **GameCharacter**

The `GameCharacter` class includes the following properties and methods:

- **Properties:**
  - `Health`: The health of the character.
  - `Strength`: The strength of the character.
  - `Stamina`: The stamina of the character.

- **Methods:**
  - `RandomStrength()`: Randomizes the strength of the character.
  - `fight(GameCharacter opponent)`: Simulates a fight with another character.
  - `Recharge()`: Recharges the character's stamina.

### **Hero**

The `Hero` class inherits from `GameCharacter` and represents a hero character with predefined health, strength, and stamina.

- **Constructor:**
  - `Hero()`: Initializes a hero with specific values for health, strength, and stamina.

### **Boss**

The `Boss` class inherits from `GameCharacter` and represents a boss character. It has additional functionality for randomizing its strength.

- **Constructor:**
  - `Boss()`: Initializes a boss with specific values for health, strength, and stamina.

- **Methods:**
  - `RandomizeStrength()`: Randomizes the boss's strength before a fight.

## **Main Function**

The `Main` function creates instances of `Hero` and `Boss`, and simulates a combat scenario where each character alternates attacking until one of them runs out of health.

```csharp
void Main()
{
    Hero hero = new Hero();
    Boss boss = new Boss();

    Console.WriteLine($"hero:                   boss: \r\n " +
                    $"Health:{hero.Health}                Health:{boss.Health}\r\n" +
                      $"Strength:{hero.Strength}                Strength:{boss.Strength}\r\n" +
                      $"Stamina:{hero.Stamina}                Stamina:{boss.Stamina}\r\n");

    while (hero.Health > 0 && boss.Health > 0)
    {
        hero.fight(boss);

        boss.RandomizeStrength();
        boss.fight(hero);
    }

    if (hero.Health >= 0)
    {
        Console.WriteLine("hero wins!");
    }
    else
    {
        Console.WriteLine("boss wins!");
    }
}

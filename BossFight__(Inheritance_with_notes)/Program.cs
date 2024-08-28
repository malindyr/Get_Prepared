Main();
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
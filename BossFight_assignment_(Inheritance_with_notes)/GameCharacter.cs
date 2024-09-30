class GameCharacter
{
    public int Health { get; private set; }
    public int Strength { get; set; }
    public int Stamina { get; private set; }
    private int InitialStamina { get; set; }

    public GameCharacter(int health, int strength, int stamina)
    {
        Health = health;
        Strength = strength;
        Stamina = stamina;
        InitialStamina = stamina;
    }

    public int RandomStrength()
    {
        Random rand = new Random();
        Strength = rand.Next(0, 31);

        return Strength;
    }

    public void fight(GameCharacter opponent) //boss.fight(hero), hero is the "opponent"
    {
        if (Stamina > 0)
        {
            opponent.Health -= this.Strength;
            Stamina -= 10;     //GetType(): method is called on "this" and it returns the type(class) of the current instance.
            Console.WriteLine($"{this.GetType().Name} hit {opponent.GetType().Name} with {this.Strength}. {opponent.GetType().Name} health is now {opponent.Health}\r\n");
        }                          //"the exact runtime type of the current instance"
        else
        {
            Console.WriteLine($"stamina was too low, {this.GetType().Name} had to recharge\r\n");
            Recharge();
        }
    }

    public void Recharge()
    {
        Stamina = InitialStamina;
        Console.WriteLine($"{this.GetType().Name} stamina was recharged and is now {InitialStamina}\r\n");
    }
}

class Boss : GameCharacter //boss is a "subclass" of GameCharacter. Meaning it inherits all gamecharacter methods and properties
{
    private static Random rand = new Random();

    //  public Boss() : base(400,0, 10) { }, This is the constructor for Boss.
    // 'public' means we can access Boss from other parts of the program.
    // 'Boss()' is the constructor that gets called when we create a new Boss object.
    // 'base(100, 20, 40)' calls the GameCharacter constructor with the values 400, 0, and 10.
    public Boss() : base(400, 0, 10) { }

    public void RandomizeStrength() //ramdom strength for boss, needs to be called BEFORE boss.fight()
    {
        Strength = rand.Next(0, 31);
    }
}

class Hero : GameCharacter //class called hero, hero inherits gamecharacter properties
{
    public Hero() : base(100, 20, 40) { } //remember "{}" at the end!!!
    //public : "hero()" and its constructor can be accessed from other parts of the program
    //hero() : this is a constructor for the "hero" class. hero() is a method that is called when a new instance of the class is created
    //base() : calls the constructor of the parent class (GameCharacter) and passes the values to it "100,20,40". "base" is used to refer to the parent class constructor
}
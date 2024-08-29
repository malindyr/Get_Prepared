namespace _19._08._24_attempt_5.Model
{
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Owner> Owners { get; set;}

    }
}

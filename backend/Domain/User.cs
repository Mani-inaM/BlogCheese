namespace Domain;

public class User
{
    public int Id { get; set; }
    public string username{ get; set; }
    public string password{ get; set; }
    public List<Post> Posts{ get; set; }

}
namespace Domain;

public class User
{
    public int Id { get; set; }
    public string Username{ get; set; }
    public List<Post>? Posts{ get; set; }
    
    public string? Salt { get; set; } 
    public string? Hash { get; set; } 

}
namespace Application;

public class RegisterUserDTO
{
    public string Username { get; set; }
    public string Password { get; set; }
}


public class LoginUserDTO
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}
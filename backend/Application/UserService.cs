using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Application.Interfaces;
using Domain;
using Domain.Services;
using Microsoft.IdentityModel.Tokens;

namespace Application;

public class UserService: IUserService
{
    public IUserRepo _repo { get; set; }

    public UserService(IUserRepo repo)
    {
        _repo = repo;
    }

    public string RegisterUser(RegisterUserDTO dto)
    {
        try
        {
            _repo.GetUserByUsername(dto.Username);
        }
        catch (KeyNotFoundException e)
        {
            var salt = RandomNumberGenerator.GetBytes(32).ToString();
            var user = new User()
            {
                Username = dto.Username,
                Salt = salt,
                Hash = BCrypt.Net.BCrypt.HashPassword(dto.Password+salt),
                Posts = new List<Post>()
            };
            _repo.CreateNewUser(user);
            return GeneratedToken(user);

        }
        
        throw new Exception("Username: "+ dto.Username + " is already taken");
    }

    public string LoginUser(LoginUserDTO dto)
    {
        var user = _repo.GetUserByUsername(dto.Username);

        if (BCrypt.Net.BCrypt.Verify(dto.Password+user.Salt,user.Hash))
        {
            return GeneratedToken(user);
        }

        throw new Exception("Wrong login credentials");
    }

    private string GeneratedToken(User user)
    {
        var key = Encoding.UTF8.GetBytes("NotSoSecretSecretPasswordKeyThing");
        var tokenDescriptor = new SecurityTokenDescriptor()
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("Username", user.Username),
                new Claim("Id", user.Id.ToString())
            }),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
    }
}
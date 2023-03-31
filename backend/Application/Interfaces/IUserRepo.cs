using Domain;

namespace Application.Interfaces;

public interface IUserRepo
{
    User GetUserByUsername(string username);
    User CreateNewUser(User user);
}
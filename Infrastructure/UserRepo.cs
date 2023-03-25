using Application.Interfaces;
using Domain;

namespace Infrastructure;

public class UserRepo: IUserRepo
{
    private readonly DBContext _context;

    public UserRepo(DBContext context)
    {
        _context = context;
    }

    public User GetUserByUsername(string username)
    {
        var user = _context.UserTable.FirstOrDefault(u => u.Username == username);
        if (user == null)
        {
            throw new KeyNotFoundException();
        }
        return user;
    }

    public User CreateNewUser(User user)
    {
        var createdUser = _context.UserTable.Add(user).Entity;
        _context.SaveChanges();
        return createdUser;
    }
}
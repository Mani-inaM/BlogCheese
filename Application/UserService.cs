using Application.Interfaces;
using Domain;
using Domain.Services;
using Infrastructure;

namespace Application;

public class UserService: IUserService
{
    public IUserRepo _repo { get; set; }

    public User CreateUser(User user)
    {
        return null;
    }
}
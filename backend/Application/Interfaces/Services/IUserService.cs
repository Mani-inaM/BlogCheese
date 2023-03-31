using Application;

namespace Domain.Services;

public interface IUserService
{
    public string RegisterUser(RegisterUserDTO user);


    public string LoginUser(LoginUserDTO dto);
}
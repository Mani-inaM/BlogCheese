using Application;
using Domain;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{
    private readonly IUserService _service;

    public UserController(IUserService service)
    {
        _service = service;
    }


    [HttpPost]
    [Route("Register")]
    public ActionResult Register(RegisterUserDTO dto)
    {

        try
        {
            return Ok(_service.RegisterUser(dto));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
    [Route("Login")]
    public ActionResult Login(LoginUserDTO dto)
    {
        try
        {
            return Ok(_service.LoginUser(dto));
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }


}
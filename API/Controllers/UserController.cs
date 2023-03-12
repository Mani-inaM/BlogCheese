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


    [HttpPost]
    [Route("PostUser")]
    public ActionResult<User> PostUser(User user)
    {

        try
        {
            return Ok(_service.CreateUser(user));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


}
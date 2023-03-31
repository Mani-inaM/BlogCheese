using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class DBController: ControllerBase
{
    private readonly IDBService _service;

    public DBController(IDBService service)
    {
        _service = service;
    }
    
    [HttpGet]
    [Route("rebuildDB")]
    public string RebuildDb()
    {
        _service.RebuildDb();
        return "Db has been created";
    }
}
using Application.Interfaces;
using Domain.Services;

namespace Application;

public class DBService: IDBService
{

    private readonly IDbRepo _repo;

    public DBService(IDbRepo repo)
    {
        _repo = repo;
    }

    public void RebuildDb()
    {
        _repo.RebuildDb();
    }
}
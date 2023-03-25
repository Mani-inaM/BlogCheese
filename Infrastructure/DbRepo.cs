using Application.Interfaces;

namespace Infrastructure;

public class DbRepo: IDbRepo
{
    private readonly DBContext _context;

    public DbRepo(DBContext context)
    {
        _context = context;
    }

    public void RebuildDb()
    {
        _context.Database.EnsureDeleted();
        _context.Database.EnsureCreated();
    }
}
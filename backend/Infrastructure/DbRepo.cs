using Application.Interfaces;

namespace Infrastructure;

public class DbRepo: IDbRepo
{
    private readonly DatabaseContext _context;

    public DbRepo(DatabaseContext context)
    {
        _context = context;
    }

    public void RebuildDb()
    {
        _context.Database.EnsureDeleted();
        _context.Database.EnsureCreated();
    }
}
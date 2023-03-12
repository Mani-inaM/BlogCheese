using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class DBContext: DbContext
{
    public DBContext(DbContextOptions<DBContext> opts) : base(opts)
    {
            
    }
    
    
    public DbSet<Post> PostTable { get; set; }
    public DbSet<User> UserTable { get; set; }
}
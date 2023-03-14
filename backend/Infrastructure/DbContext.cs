using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class DBContext: DbContext
{
    public DBContext(DbContextOptions<DBContext> opts) : base(opts)
    {
            
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
        modelBuilder.Entity<Post>()
            .Property(f => f.Id)
            .ValueGeneratedOnAdd();
        modelBuilder.Entity<User>()
            .HasKey(c => new { ManFacId = c.Id });
        modelBuilder.Entity<Post>()
            .HasKey(c => new { ManFacId = c.Id });

        modelBuilder.Entity<Post>()
            .HasOne(r => r.PostAuthor)
            .WithMany(p => p.Posts)
            .HasForeignKey(r => r.Id);
    }

    public DbSet<Post> PostTable { get; set; }
    public DbSet<User> UserTable { get; set; }
}
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
            .Property(user => user.Id)
            .ValueGeneratedOnAdd();
        modelBuilder.Entity<Post>()
            .Property(post => post.Id)
            .ValueGeneratedOnAdd();
        
        modelBuilder.Entity<User>()
            .HasMany(u => u.Posts)
            .WithOne(p => p.PostAuthor)
            .HasForeignKey(p => p.PostAuthorId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<User>()
            .Ignore(u => u.Posts);

        modelBuilder.Entity<Post>()
            .Ignore(p => p.PostAuthor);
    }

    public DbSet<Post> PostTable { get; set; }
    public DbSet<User> UserTable { get; set; }
}
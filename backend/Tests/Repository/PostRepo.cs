using Application;
using Application.Interfaces;
using AutoMapper;
using Domain;
using Infastructure;
using Infrastructure;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace Tests;

public class PostRepoTests
{
    
    [Theory]
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(3)]
    public void TestGetByID(int queryId)
    {
        
        var _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();
        
        var _options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseSqlite(_connection)
            .Options;

        // Initialize the database with test data
        using (var context = new DatabaseContext(_options))
        {
            context.Database.EnsureCreated();
            context.PostTable.AddRange(new[]
            {
                new Post { Id = 1, Title = "Post 1", Content = "This is post 1" },
                new Post { Id = 2, Title = "Post 2", Content = "This is post 2" },
                new Post { Id = 3, Title = "Post 3", Content = "This is post 3" }
            });
            context.SaveChanges();
        }

        var databaseContext = new DatabaseContext(_options);
        var postRepo = new PostRepo(databaseContext);
        
        //Act
        var post = postRepo.GetPostById(queryId);
        
        
        Assert.Equal(queryId,post.Id);


    }
    
    
    [Fact]
    public void TestExpectedPosts()
    {
        // Arrange 
        var expectedPosts = new List<Post>
        {
            new Post { Id = 1, Title = "First post", Content = "This is the first post" },
            new Post { Id = 2, Title = "Second post", Content = "This is the second post" },
            new Post { Id = 3, Title = "Third post", Content = "This is the third post" }
        };

        var mockRepo = new Mock<IPostRepo>();
        mockRepo.Setup(c => c.GetAllPosts()).Returns(expectedPosts);


        // Act
        var result = mockRepo.Object.GetAllPosts();

        // Assert
        Assert.Equal(expectedPosts.Count, result.Count());
        Assert.Equal(expectedPosts, result);

    }

    [Theory]
    [InlineData(1,2)]
    [InlineData(2,1)]
    public void TestGetUsersPosts(int authorID,int expectedPosts)
    {
        var _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();
        
        var _options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseSqlite(_connection)
            .Options;

        // Initialize the database with test data
        using (var context = new DatabaseContext(_options))
        {
            context.Database.EnsureCreated();
            context.PostTable.AddRange(new[]
            {
                new Post { Id = 1, Title = "Post 1", Content = "This is post 1",PostAuthorId = 1},
                new Post { Id = 2, Title = "Post 2", Content = "This is post 2",PostAuthorId = 1},
                new Post { Id = 3, Title = "Post 3", Content = "This is post 3",PostAuthorId = 2}
            });
            context.SaveChanges();
        }

        var databaseContext = new DatabaseContext(_options);
        var postRepo = new PostRepo(databaseContext);



        List<Post> actualPosts = postRepo.GetUsersPostsById(authorID);
        
        Assert.Equal(expectedPosts,actualPosts.Count);
    }

    [Fact]
    public void TestGetByAuthorIdNotFound()
    {
        var _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();
        
        var _options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseSqlite(_connection)
            .Options;
        
        using (var context = new DatabaseContext(_options))
        {
            context.Database.EnsureCreated();
        }
        
        var databaseContext = new DatabaseContext(_options);
        var postRepo = new PostRepo(databaseContext);

        var exception = Assert.Throws<KeyNotFoundException>(() => postRepo.GetUsersPostsById(-10));
        

    }

}
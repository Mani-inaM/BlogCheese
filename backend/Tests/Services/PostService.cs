using Application;
using Application.Interfaces;
using AutoMapper;
using Domain;
using Moq;

namespace Tests.Services;

public class PostServiceTests
{
    

    [Fact]
    public void TestCreatePost()
    {
        //Arrange
        
        //Create mock dependencies
        var mockRepo = new Mock<IPostRepo>();
        var mockMapper = new Mock<IMapper>();
        
        //setup the mock dependencies
        mockMapper.Setup(m => m.Map<CreatePostDTO, Post>(It.IsAny<CreatePostDTO>()))
            .Returns(new Post());

        mockRepo.Setup(m => m.CreatePost(It.IsAny<Post>()))
            .Returns(new Post());
        
        //Create service end mock entity
        var service = new PostService(mockRepo.Object, mockMapper.Object);
        
        var postDTO = new CreatePostDTO()
            { PostAuthorId = 1, Content = "content", PostDateTime = DateTime.Now, Title = "title" };

        //Act
        var result = service.CreatePost(postDTO);
        
        
        //Assert
        mockRepo.Verify(r => r.CreatePost(It.IsAny<Post>()),Times.Once);
    }
}
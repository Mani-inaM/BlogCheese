using Application.Interfaces;
using AutoMapper;
using Domain;
using Domain.Services;

namespace Application;

public class PostService: IPostService
{
    private readonly IPostRepo _repo;
    private readonly IMapper _mapper;

    public PostService(IPostRepo repo,IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }

    public Post CreatePost(CreatePostDTO dto)
    {
        //TODO Should probably validate for tests or something
        var post = _mapper.Map<Post>(dto);
        return _repo.CreatePost(post);
    }

    public Post GetPostById(int postId)
    {
        return _repo.GetPostById(postId);
    }

    public Post DeletePost(int postId)
    {
        return _repo.DeletePost(postId);
    }

    public List<Post> GetAllPosts()
    {
        return _repo.GetAllPosts();
    }

    public Post UpdatePost(UpdatePostDTO dto)
    {
        return _repo.UpdatePost(dto);
    }

    public List<Post> GetUsersPostsById(int userId)
    {
        return _repo.GetUsersPostsById(userId);
    }
}
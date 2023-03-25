using Application;

namespace Domain.Services;

public interface IPostService
{
    public Post CreatePost(CreatePostDTO post);
    public Post GetPostById(int postId);
    public Post DeletePost(int postId);
    public List<Post> GetAllPosts();
    public Post UpdatePost(UpdatePostDTO post);
    List<Post> GetUsersPostsById(int userId);
}
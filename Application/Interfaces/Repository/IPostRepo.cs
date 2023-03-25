using Domain;

namespace Application.Interfaces;

public interface IPostRepo
{
    Post GetPostById(int postId);
    Post CreatePost(Post post);
    Post DeletePost(int postId);
    List<Post> GetAllPosts();
    Post UpdatePost(UpdatePostDTO dto);
    List<Post> GetUsersPostsById(int userId);
}
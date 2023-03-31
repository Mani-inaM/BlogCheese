
using Application;
using Application.Interfaces;
using Domain;
using Infrastructure;
using SQLitePCL;

namespace Infastructure;

public class PostRepo: IPostRepo
{
    private DBContext _dbcontext;

    public PostRepo(DBContext dbcontext)
    {
       
        _dbcontext = dbcontext;
    }


    public List<Post> GetAllPost()
    {
        return _dbcontext.PostTable.ToList();
    }
    
    public Post CreatePost(Post post)
    {
        var author = _dbcontext.UserTable.FirstOrDefault(author => author.Id == post.PostAuthorId) ??
                     throw new KeyNotFoundException($"Can't create post as current user doesn't exist");

        post.PostAuthor = author;
        var createdPost = _dbcontext.PostTable.Add(post).Entity;
        _dbcontext.SaveChanges();
        return createdPost;
    }

    public Post DeletePost(int postId)
    {
        var post = _dbcontext.PostTable.Find(postId) ??
                   throw new KeyNotFoundException("Post not found");
        _dbcontext.PostTable.Remove(post);
        _dbcontext.SaveChanges();
        return post;
    }

    public List<Post> GetAllPosts()
    {
        return _dbcontext.PostTable.ToList();
    }

    public Post UpdatePost(UpdatePostDTO dto)
    {
        var post = _dbcontext.PostTable.Find(dto.Id) ??
                   throw new KeyNotFoundException("Post that you're updating doesn't exist");
        
        post.Content = dto.Content;
        post.Title = dto.Title;
        _dbcontext.SaveChanges();
        
        return post;
    }

    public List<Post> GetUsersPostsById(int userId)
    {
        var usersPosts = _dbcontext.PostTable.Where(p => p.PostAuthorId == userId) ??
                         throw new KeyNotFoundException("No posts by user found");
        return usersPosts.ToList();
    }


    public Post GetPostById(int postId)
    {
        var post = _dbcontext.PostTable.FirstOrDefault(p => p.Id == postId) ??
                   throw new KeyNotFoundException($"No post with id:{postId} found");
        return post;
    }
    
    
}
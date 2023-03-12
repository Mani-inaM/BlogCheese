
using Domain;
using Infrastructure;

namespace Infastructure;

public class PostRepo
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
        _dbcontext.PostTable.Add(post);
        _dbcontext.SaveChanges();
        return post;
    }
   
    public Post UpdatePost(Post post)
    {
        
        _dbcontext.PostTable.Update(post);
        _dbcontext.SaveChanges();
        return post;
    }
    
    

    public string GetPostId(string PostId)
    {   
        Post? id = _dbcontext.PostTable.FirstOrDefault(u => u.Id.ToString().Equals(PostId));
        return id.ToString();
    }
}
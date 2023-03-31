namespace Domain;

public class Post
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PostDateTime { get; set; }
    public User PostAuthor { get; set; }
    public int PostAuthorId { get; set; }
}
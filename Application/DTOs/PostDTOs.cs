using Domain;

namespace Application;

public class CreatePostDTO
{
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime PostDateTime { get; set; }
    public int PostAuthorId { get; set; }
}

public class UpdatePostDTO
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
}
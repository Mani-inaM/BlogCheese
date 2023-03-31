using Application;
using AutoMapper;
using Domain;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class PostController: ControllerBase
{
    private readonly IPostService _service;

    public PostController(IPostService service)
    {
        _service = service;
    }

    [HttpPost]
    [Route("CreatePost")]
    public ActionResult<Post> CreatePost(CreatePostDTO dto)
    {
        try
        {
            return Ok(_service.CreatePost(dto));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
    [Route("UpdatePost")]
    public ActionResult<Post> UpdatePost(UpdatePostDTO dto)
    {
        try
        {
            return Ok(_service.UpdatePost(dto));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpDelete]
    [Route("DeletePost/{postId}")]
    public ActionResult DeletePost([FromRoute]int postId)
    {
        try
        {
            return Ok(_service.DeletePost(postId));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("GetPost/{postId}")]
    public ActionResult<Post> GetPostById([FromRoute] int postId)
    {
        try
        {
            return Ok(_service.GetPostById(postId));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("GetAllPosts")]
    public ActionResult<List<Post>> GetAllPosts()
    {
        try
        {
            return Ok(_service.GetAllPosts());
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("GetUsersPosts/{userId}")]
    public ActionResult<List<Post>> GetUsersPostsById([FromRoute] int userId)
    {
        try
        {
            return Ok(_service.GetUsersPostsById(userId));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


}
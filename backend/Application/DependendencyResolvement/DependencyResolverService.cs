using Domain.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Application.DependencyResolvement;

public static class DependencyResolverService
{

    public static void RegisterApplicationLayer(IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IDBService, DBService>();
        services.AddScoped<IPostService, PostService>();
    }
}
using Application.Interfaces;
using Domain.Services;
using Infastructure;
using Microsoft.Extensions.DependencyInjection;


namespace Infrastructure.DependencyResolvement;

public static class DependencyResolverService
{

    public static void RegisterInfrastructureLayer(IServiceCollection services)
    {
        services.AddScoped<IUserRepo, UserRepo>();
        services.AddScoped<IDbRepo, DbRepo>();
        services.AddScoped<IPostRepo, PostRepo>();
    }
}
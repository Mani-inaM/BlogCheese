using Domain.Services;
using Microsoft.Extensions.DependencyInjection;


namespace Infrastructure.DependencyResolvement;

public static class DependencyResolverService
{

    public static void RegisterInfrastructureLayer(IServiceCollection services)
    {
        services.AddScoped<IUserRepo, UserRepo>();
    }
}
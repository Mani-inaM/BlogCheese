using Application;
using AutoMapper;
using Domain;
using Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DatabaseContext>(optionsBuilder => optionsBuilder.UseSqlite(
    "Data source=db.db"));

Application.DependencyResolvement.DependencyResolverService.RegisterApplicationLayer(builder.Services);
Infrastructure.DependencyResolvement.DependencyResolverService.RegisterInfrastructureLayer(builder.Services);

var config = new MapperConfiguration(conf =>
{
    conf.CreateMap<CreatePostDTO, Post>();
});

var mapper = config.CreateMapper();

builder.Services.AddSingleton(mapper);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(options => {
        options.AllowAnyOrigin();
        options.AllowAnyHeader();
        options.AllowAnyMethod();
    });
    
}


app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();
app.Run();

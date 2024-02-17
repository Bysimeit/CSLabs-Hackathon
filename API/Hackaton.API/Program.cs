using Microsoft.EntityFrameworkCore;
using SqlDatabase;
using Shared.Interfaces;
using SqlDatabase.Repositories;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<MyDbContext>(options => options.UseSqlServer(connectionString, options => options.EnableRetryOnFailure()));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddHttpClient();


app.MapGet("/", () => "Hello World!");

app.Run();

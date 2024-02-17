using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using Shared.Interfaces;
using SqlDatabase;
using SqlDatabase.Repositories;
using System.Globalization;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<MyDbContext>(options => options.UseSqlServer(connectionString, options => options.EnableRetryOnFailure()));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddHttpClient();
builder.Services.AddLocalization();

builder.Services.AddControllers().AddJsonOptions(c => c.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("nl-BE")
{
	NumberFormat = { NumberDecimalSeparator = "." }
};
Thread.CurrentThread.CurrentCulture = CultureInfo.DefaultThreadCurrentCulture;
Thread.CurrentThread.CurrentUICulture = CultureInfo.DefaultThreadCurrentCulture;

app.UseRequestLocalization(new RequestLocalizationOptions
{
	DefaultRequestCulture = new RequestCulture(CultureInfo.DefaultThreadCurrentCulture),
	SupportedCultures = new[] { CultureInfo.DefaultThreadCurrentCulture },
	FallBackToParentCultures = false
});

app.MapControllers();

app.Run();


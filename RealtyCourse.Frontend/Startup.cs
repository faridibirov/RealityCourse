using Microsoft.EntityFrameworkCore;
using RealtyCourse.DAL;
using RealtyCourse.DAL.Repositories;

namespace RealtyCourse.Frontend;

public class Startup
{
	public IConfiguration Configuration { get; set; }

	public Startup(IConfiguration configuration)
	{
		Configuration = configuration;
	}

	public void ConfigureServices(IServiceCollection services)
	{
		string connectionString = Configuration.GetConnectionString("DefaultConnection");

		services.AddDbContext<RealtyContext>(options => options.UseSqlServer(connectionString));
		services.AddScoped(typeof(EFGenericRepo<,>));
		services.AddMvc();
	}

	public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
	{
		if (env.IsDevelopment())
		{
			app.UseDeveloperExceptionPage();
			app.UseWebpackDevMiddleware();
		}
		app.UseStaticFiles();
		app.UseRouting();

		app.UseEndpoints(endpoints =>
		{
			endpoints.MapControllerRoute(
				name: "default",
				pattern: "{controller=Home}/{action=Index}/{id?}");

			endpoints.MapControllerRoute(
				name: "api",
				pattern: "api/{controller=Default}/{action=Index}/{id?}");

			endpoints.MapFallbackToController("Index", "Home");
		});
	}


}

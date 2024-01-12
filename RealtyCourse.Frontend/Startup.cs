namespace RealtyCourse.Frontend;

public class Startup
{
	public void ConfigureServices(IServiceCollection services)
	{
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

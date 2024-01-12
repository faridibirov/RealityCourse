using Microsoft.AspNetCore.Mvc;

namespace RealityCourse.Frontend.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}

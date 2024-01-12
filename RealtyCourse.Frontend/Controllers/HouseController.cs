using Microsoft.AspNetCore.Mvc;
using RealtyCourse.Business.Models;
namespace RealtyCourse.Frontend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HouseController : Controller
{
	[Route("getall")]
	[HttpGet]
	public IActionResult GetAll()
	{
		House firstHouse = new House()
		{
			Id = 1,
			CreationDateTime = DateTime.Now,
			Address = "Unknown",
			MaxFloor = 6,
			BuildYear = 1968,
			WallMaterial = "brick"
		};
		House secondHouse = new House()
		{
			Id = 2,
			CreationDateTime = DateTime.Now.AddDays(-8),
			Address = "Moscow, 19, Pushkin st.",
			MaxFloor = 9,
			BuildYear = 1985,
			WallMaterial = "concrete panel"
		};

		List<House> houses = new List<House>() { firstHouse, secondHouse };

		return Json(houses);
	}

	[Route("get")]
	[HttpGet]
	public IActionResult GetSingle()
	{
		House house = new House()
		{
			Id = 1,
			CreationDateTime = DateTime.Now,
			Address = "Unknown",
			MaxFloor = 6,
			BuildYear = 1968,
			WallMaterial = "brick"
		};

		return Json(house);
	}
}

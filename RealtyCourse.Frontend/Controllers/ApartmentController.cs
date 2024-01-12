using Microsoft.AspNetCore.Mvc;
using RealtyCourse.Business.Models;

namespace RealtyCourse.Frontend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ApartmentController : Controller
{
	[Route("getall")]
	[HttpGet]
	public IActionResult GetAll()
	{
		Apartment firstAparment = new Apartment()
		{
			Id=1,
			CreationDateTime= DateTime.Now,
			HouseId=1,
			Floor=4,
			Price=4500000.0f,
			LivingSpace=43.2f,
			RoomAmount=2
		};
		
		Apartment secondAparment = new Apartment()
		{
			Id = 2,
			CreationDateTime = DateTime.Now.AddDays(-4),
			HouseId = 2,
			Floor = 3,
			Price = 7800000.0f,
			LivingSpace = 56.8f,
			RoomAmount = 3
		};

		List<Apartment> aparments = new List<Apartment>() { firstAparment, secondAparment };
		return Json(aparments);
	}

	[Route("get")]
	[HttpGet]
	public IActionResult GetSingle(int? id)
	{
		if (!id.HasValue)
		{
			return NotFound("Id not provided");	
		}

		Apartment apartment = new Apartment()
		{
			Id = 1,
			CreationDateTime = DateTime.Now,
			HouseId = 1,
			Floor = 4,
			Price = 4500000.0f,
			LivingSpace = 43.2f,
			RoomAmount = 2
		};
		return Json(apartment);
	}
}

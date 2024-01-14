using Microsoft.AspNetCore.Mvc;
using RealtyCourse.Business.Models;
using RealtyCourse.DAL;
using RealtyCourse.DAL.Repositories;
namespace RealtyCourse.Frontend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HouseController : Controller
{
	private readonly EFGenericRepo<House, RealtyContext> _houseRepo;

	public HouseController(EFGenericRepo<House, RealtyContext> houseRepo)
	{
		_houseRepo = houseRepo;
	}

	[Route("getall")]
	[HttpGet]
	public IActionResult GetAll()
	{

		List<House> houses = _houseRepo.GetAllWithoutTracking().ToList();

		return Json(houses);
	}

	[Route("get")]
	[HttpGet]
	public IActionResult GetSingle(int? id)
	{
		if (!id.HasValue)
			return NotFound("Id not provided");

		House houseInfo = _houseRepo.GetWithoutTracking(x=>x.Id==id.Value);

		return Json(new { houseInfo=houseInfo });
	}
}

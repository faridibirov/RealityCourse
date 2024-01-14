using Microsoft.AspNetCore.Mvc;
using RealtyCourse.Business.Models;
using RealtyCourse.DAL.Repositories;
using RealtyCourse.DAL;

namespace RealtyCourse.Frontend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ApartmentController : Controller
{

	private readonly EFGenericRepo<Apartment, RealtyContext> _apartmentRepo;

	public ApartmentController(EFGenericRepo<Apartment, RealtyContext> apartmentRepo)
	{
		_apartmentRepo = apartmentRepo;
	}

	[Route("getall")]
	[HttpGet]
	public IActionResult GetAll()
	{
		List<Apartment> apartments = _apartmentRepo.GetAllWithoutTracking().ToList();

		return Json(apartments);
	}

	[Route("get")]
	[HttpGet]
	public IActionResult GetSingle(int? id)
	{
		if (!id.HasValue)
		{
			return NotFound("Id not provided");	
		}

		Apartment apartmentInfo = _apartmentRepo.GetWithoutTracking(x => x.Id == id.Value);

		return Json(new { apartmentInfo = apartmentInfo });
	}
}

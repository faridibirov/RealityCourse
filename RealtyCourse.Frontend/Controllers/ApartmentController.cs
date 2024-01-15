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
	public IActionResult GetAll(int? page, int? pageSize)
	{
		int targetPage = page.GetValueOrDefault(1);
		int targetPageSize = pageSize.GetValueOrDefault(10);

		IQueryable<Apartment> allEntities = _apartmentRepo.GetAllWithoutTracking();

		int totalCount = allEntities.Count();

		List<Apartment> apartmentsInfo = allEntities
			.Skip((targetPage - 1) * targetPageSize)
			.Take(targetPageSize)
			.ToList();

		return Json(new { apartmentsInfo, totalCount });
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

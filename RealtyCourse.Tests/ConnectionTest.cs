using Microsoft.EntityFrameworkCore;
using RealtyCourse.Business.Models;
using RealtyCourse.DAL;
using RealtyCourse.DAL.Repositories;

namespace RealtyCourse.Tests;


public class ConnectionTest
{
	//[Fact]
	public void HouseConnectionTest()
	{

		using (var realtyContext = GetContext())
		{
			House foundHouse = realtyContext.Houses.Find(1);
			Assert.NotNull(foundHouse);
		}
	}

	[Fact]
	public void House_GetWithRepository()
	{
		using (var realtyContext = GetContext())
		using (EFGenericRepo<House, RealtyContext> houseRepository = new EFGenericRepo<House, RealtyContext>(realtyContext))
		{
			List<House> houses = houseRepository.GetAllWithoutTracking()
				.Take(2)
				.ToList();

			Assert.NotEmpty(houses);	
		}
	}


	[Fact]
	public void Apartment_GetWithRepository()
	{
		using (var realtyContext = GetContext())
		using (EFGenericRepo<Apartment, RealtyContext> apartmentRepository = new EFGenericRepo<Apartment, RealtyContext>(realtyContext))
		{
			List<Apartment> apartments = apartmentRepository.GetAllWithoutTracking()
				.Take(5)
				.ToList();

			Assert.NotEmpty(apartments);
		}
	}

	private RealtyContext GetContext()
	{
		string connectionString = @"Data Source=DESKTOP-FARID;Database=RealtyCourse;Trusted_Connection=True; Integrated Security=True;   TrustServerCertificate=True";
		DbContextOptionsBuilder<RealtyContext> optionsBilder = new DbContextOptionsBuilder<RealtyContext>();
		optionsBilder.UseSqlServer(connectionString);

		return new RealtyContext(optionsBilder.Options);
	}

}

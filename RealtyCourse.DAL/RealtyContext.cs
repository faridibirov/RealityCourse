﻿using Microsoft.EntityFrameworkCore;
using RealtyCourse.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealtyCourse.DAL;

public class RealtyContext: DbContext
{
	public RealtyContext(DbContextOptions<RealtyContext> options) : base(options)
	{
	}

    public RealtyContext()
    {
        
    }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);
		modelBuilder.RemovePluralizingTableNameConventions();
	}

	public DbSet<House> Houses { get; set; }
	public DbSet<Apartment> Apartment { get; set; }


}

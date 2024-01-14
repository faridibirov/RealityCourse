using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealtyCourse.DAL;

public static class ModelBuilderExtentions
{
	public static void RemovePluralizingTableNameConventions(this ModelBuilder modelBuilder)
	{
		foreach(IMutableEntityType entity in modelBuilder.Model.GetEntityTypes())
		{
			entity.SetTableName(entity.DisplayName());
		}
	}
}

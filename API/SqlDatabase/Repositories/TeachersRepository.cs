using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SqlDatabase.Repositories
{
	public class TeachersRepository : ITeachersRepository
	{
		private readonly MyDbContext _context;

		public TeachersRepository(MyDbContext context)
		{
			_context = context;
		}
	}
}

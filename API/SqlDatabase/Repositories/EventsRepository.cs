using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SqlDatabase.Repositories
{
	public class EventsRepository : IEventsRepository
	{
		private readonly MyDbContext _context;

		public EventsRepository(MyDbContext context)
		{
			_context = context;
		}
	}
}

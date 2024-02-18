using Shared.Entities;
using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

namespace SqlDatabase.Repositories
{
	public class ClassesRepository : IClassesRepository
	{
		private readonly MyDbContext _context;

		public ClassesRepository(MyDbContext context)
		{
			_context = context;
		}

		public async Task NewClass(string teacherUser, string name)
		{
			int teacherId = _context.Teachers.First(t => t.UserName == teacherUser).Id;
			Class newClass = new Class()
			{
				Name = name,
				TeacherId = teacherId,
			};
			await _context.AddAsync(newClass);
		}
		
		public List<Class> GetClasses(string teacherUser)
		{
			var teacherId = _context.Teachers.First(t => t.UserName.Equals(teacherUser)).Id;
			return _context.Classes.Where(c => c.TeacherId == teacherId).ToList();
		}
	}
}

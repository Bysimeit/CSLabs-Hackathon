using Shared.Entities;
using Shared.Interfaces;
using Task = System.Threading.Tasks.Task;

namespace SqlDatabase.Repositories
{
	public class StudentsRepository : IStudentsRepository
	{
		private readonly MyDbContext _context;

		public StudentsRepository(MyDbContext context)
		{
			_context = context;
		}

		public async Task NewAccount(Student student)
		{
			var existingAccount = _context.Students.Any(s => s.UserName == student.UserName && s.Password == student.Password);
			if (!existingAccount)
			{
				await _context.AddAsync(student);
			}
		}

		public bool GetAccount(string username, string password)
		{
			return _context.Students.Any(s => s.UserName == username && s.Password == password);
		}
	}
}

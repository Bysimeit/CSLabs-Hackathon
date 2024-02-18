using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SqlDatabase.Repositories
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly MyDbContext _dataContext;

		public UnitOfWork(MyDbContext dataContext)
		{
			_dataContext = dataContext;
		}
		public IClassesRepository ClassesRepository => new ClassesRepository(_dataContext);
		public IEventsRepository EventsRepository => new EventsRepository(_dataContext);
		public ILessonsRepository LessonsRepository => new LessonsRespository(_dataContext);
		public IStudentsRepository StudentsRepository => new StudentsRepository(_dataContext);
		public ITasksRepository TasksRepository => new TasksRepository(_dataContext);
		public ITeachersRepository TeachersRepository => new TeachersRepository(_dataContext);

		public async Task<bool> CompleteAsync()
		{
			return await _dataContext.SaveChangesAsync() > 0;
		}

		public bool HasChanges()
		{
			return _dataContext.ChangeTracker.HasChanges();
		}
	}
}

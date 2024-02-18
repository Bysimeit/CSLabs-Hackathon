using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Interfaces
{
	public interface IUnitOfWork
	{
		IClassesRepository ClassesRepository { get; }
		IEventsRepository EventsRepository { get; }
		ILessonsRepository LessonsRepository { get; }
		IStudentsRepository StudentsRepository { get; }
		ITasksRepository TasksRepository { get; }
		ITeachersRepository TeachersRepository { get; }

		Task<bool> CompleteAsync();
		bool HasChanges();
	}
}

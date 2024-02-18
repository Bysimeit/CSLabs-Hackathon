using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

namespace Shared.Interfaces
{
	public interface IClassesRepository
	{
		Task NewClass(string teacherUser, string name);
		List<Class> GetClasses(string teacherUser);
	}
}

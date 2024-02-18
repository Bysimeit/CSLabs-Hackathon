using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using Task = System.Threading.Tasks.Task;

namespace Shared.Interfaces
{
	public interface IStudentsRepository
	{
		Task NewAccount(Student student);
		bool GetAccount(string username, string password);
	}
}

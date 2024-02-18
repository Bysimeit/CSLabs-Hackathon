using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class Student
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string FirstName { get; set;}
		public string UserName { get; set;}
		public string Password { get; set;}
		public int? ClassId { get; set; }
		public Class? Class { get; set; }
		public List<PointLesson>? PointLessons { get; set; }
		public List<StudentTask>? StudentTasks { get; set; }
	}
}

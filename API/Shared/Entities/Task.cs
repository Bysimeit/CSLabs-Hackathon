using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class Task
	{
		public int Id { get; set; }
		public int LessonId { get; set; }
		public Lesson Lesson { get; set; }
		public string Name { get; set; }
		public int NbPoints {  get; set; }
		public string Remark { get; set; }
		public List<StudentTask> StudentTasks { get; set; }
	}
}

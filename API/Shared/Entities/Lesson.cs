using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class Lesson
	{
		public int Id { get; set; }
		//public int TeacherId { get; set; }
		//public Teacher Teacher { get; set; }
		public int ClassId { get; set; }
		public Class Class { get; set; }
		public string Name { get; set; }
		public List<PointLesson> PointLessons { get; set; }
		public List<Event> Events { get; set; }
		public List<Task> Tasks { get; set; }
	}
}

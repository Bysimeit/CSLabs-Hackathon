using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class Event
	{
		public int Id { get; set; }
		public int LessonId { get; set; }
		public Lesson Lesson { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public int Cost { get; set; }
	}
}

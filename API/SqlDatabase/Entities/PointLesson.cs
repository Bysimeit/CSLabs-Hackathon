using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class PointLesson
	{
		public int StudentId { get; set; }
		public Student Student { get; set; }
		public int LessonId { get; set; }
		public Lesson Lesson { get; set; }
		public int NbPoints { get; set; }
	}
}

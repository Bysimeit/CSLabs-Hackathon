using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class Class
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int TeacherId { get; set; }
		public Teacher Teacher { get; set; }
		public List<Lesson> Lessons { get; set; }
		public List<Student> Students { get; set; }
	}
}

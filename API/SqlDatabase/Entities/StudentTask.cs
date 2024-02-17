﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
	public class StudentTask
	{
		public int StudentId { get; set; }
		public Student Student { get; set; }
		public int TaskId { get; set; }
		public Task Task { get; set; }
		public bool isValidated { get; set; }
	}
}

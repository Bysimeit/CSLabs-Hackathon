using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Task = Shared.Entities.Task;

namespace SqlDatabase
{
	public class MyDbContext : DbContext
	{
		public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

		public DbSet<Class> Classes { get; set; }
		public DbSet<Event> Events { get; set; }
		public DbSet<Lesson> Lessons { get; set; }
		public DbSet<Student> Students { get; set; }
		public DbSet<Task> Tasks { get; set; }
		public DbSet<Teacher> Teachers { get; set; }
		public DbSet<PointLesson> PointLessons { get; set; }
		public DbSet<StudentTask> StudentTasks { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.EnableSensitiveDataLogging();
			base.OnConfiguring(optionsBuilder);
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Event>()
				.HasOne(e => e.Lesson)
				.WithMany(l => l.Events)
				.HasForeignKey(e => e.LessonId);

			//modelBuilder.Entity<Lesson>()
			//	.HasOne(l => l.Teacher)
			//	.WithMany(t => t.Lessons)
			//	.HasForeignKey(l => l.TeacherId)
			//	.OnDelete(DeleteBehavior.NoAction);

			modelBuilder.Entity<Lesson>()
				.HasOne(l => l.Class)
				.WithMany(c => c.Lessons)
				.HasForeignKey(l => l.ClassId)
				.OnDelete(DeleteBehavior.NoAction);

			modelBuilder.Entity<Student>()
				.HasOne(s => s.Class)
				.WithMany(c => c.Students)
				.HasForeignKey(s => s.ClassId)
				.IsRequired(false);

			modelBuilder.Entity<Task>()
				.HasOne(t => t.Lesson)
				.WithMany(l => l.Tasks)
				.HasForeignKey(t => t.LessonId);

			modelBuilder.Entity<Class>()
				.HasOne(c => c.Teacher)
				.WithMany(t => t.Classes)
				.HasForeignKey(c => c.TeacherId);

			modelBuilder.Entity<PointLesson>()
				.HasKey(s => new { s.StudentId, s.LessonId });

			modelBuilder.Entity<PointLesson>()
				.HasOne(p => p.Student)
				.WithMany(s => s.PointLessons)
				.HasForeignKey(p => p.StudentId);

			modelBuilder.Entity<PointLesson>()
				.HasOne(p => p.Lesson)
				.WithMany(s => s.PointLessons)
				.HasForeignKey(p => p.LessonId);

			modelBuilder.Entity<StudentTask>()
				.HasKey(s => new { s.StudentId, s.TaskId });

			modelBuilder.Entity<StudentTask>()
				.HasOne(p => p.Student)
				.WithMany(s => s.StudentTasks)
				.HasForeignKey(p => p.StudentId);

			modelBuilder.Entity<StudentTask>()
				.HasOne(p => p.Task)
				.WithMany(s => s.StudentTasks)
				.HasForeignKey(p => p.TaskId);
		}
	}
}

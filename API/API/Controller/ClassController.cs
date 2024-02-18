using API.Models;
using Microsoft.AspNetCore.Mvc;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Controller
{
	[Route("[controller]")]
	[ApiController]
	public class ClassController : ControllerBase
	{
		private readonly IUnitOfWork _unitOfWork;

		public ClassController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpPost]
		[Route("New")]
		public ActionResult PostNewClass([FromBody] NewClassModel newClassModel)
		{
			if (newClassModel.TeacherUser != null && newClassModel.Name != null)
			{
				_unitOfWork.ClassesRepository.NewClass(newClassModel.TeacherUser, newClassModel.Name);
				_unitOfWork.CompleteAsync();
				return Ok();
			}
			return NoContent();
		}

		[HttpGet]
		[Route("Classes")]
		public ActionResult GetClasses(string teacherUser)
		{
			if (teacherUser != null)
			{
				var courses = _unitOfWork.ClassesRepository.GetClasses(teacherUser);
				return Ok(courses);
			}
			return NoContent();
		}
	}
}

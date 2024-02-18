using API.Models;
using Microsoft.AspNetCore.Mvc;
using Shared.Interfaces;

namespace API.Controller
{
	[Route("[controller]")]
	[ApiController]
	public class LessonController : ControllerBase
	{
		private readonly IUnitOfWork _unitOfWork;

		public LessonController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpPost]
		[Route("New")]
		public ActionResult PostNewLesson([FromBody] NewLessonModel newLessonModel)
		{
			if (newLessonModel.ClassName != null && newLessonModel.Name != null)
			{
				//_unitOfWork.LessonsRepository.NewLesson(newLessonModel.ClassName, newLessonModel.Name);
				_unitOfWork.CompleteAsync();
				return Ok();
			}
			return NoContent();
		}

		[HttpGet]
		[Route("Lessons")]
		public ActionResult GetLessons(string className)
		{
			if (className != null)
			{
				//var lessons = _unitOfWork.LessonsRepository.GetClasses(className);
				return Ok(/*lessons*/);
			}
			return NoContent();
		}
	}
}

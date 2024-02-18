using Microsoft.AspNetCore.Mvc;
using Shared.Interfaces;
using API.Models;
using Shared.Entities;

namespace API.Controller
{
	[Route("[controller]")]
	[ApiController]
	public class StudentController : ControllerBase
	{
		private readonly IUnitOfWork _unitOfWork;

		public StudentController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpPost]
		[Route("NewAccount")]
		public ActionResult PostNewAccount([FromBody] NewStudentAccountModel newStudentAccount)
		{
			if(newStudentAccount != null)
			{
				_unitOfWork.StudentsRepository.NewAccount(ConvertToStudent(newStudentAccount));
				_unitOfWork.CompleteAsync();
				return Ok();
			}
			return NoContent();
		}

		[HttpGet]
		[Route("Login")]
		public ActionResult GetAccount(string user, string password)
		{
			if (user != null && password != null)
			{
				bool accountExist = _unitOfWork.StudentsRepository.GetAccount(user, password);
				if(accountExist)
				{
					return Ok();
				}
			}
			return NoContent();
		}

		public Student ConvertToStudent(NewStudentAccountModel model)
		{
			return new Student
			{
				Name = model.Name,
				FirstName = model.FirstName,
				UserName = model.Username,
				Password = model.Password,
				ClassId = null
			};
		}
	}
}

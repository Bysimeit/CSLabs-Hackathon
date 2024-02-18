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
		[Route("New")]
		public async Task<ActionResult> PostNewAccount([FromBody] NewStudentAccountModel newStudentAccount)
		{
			if (newStudentAccount != null)
			{
				try
				{
					await _unitOfWork.StudentsRepository.NewAccount(ConvertToStudent(newStudentAccount));
					await _unitOfWork.CompleteAsync();
					return Ok();
				}
				catch (Exception ex)
				{
					// Log the exception
					return StatusCode(500, "An error occurred while adding the new student account.");
				}
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

using AngularProject.Models;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentCoursesController : ControllerBase
    {
        private readonly RepositoryContext _context;

        public StudentCoursesController(RepositoryContext context)
        {
            _context = context;
        }

        // GET: api/StudentCourses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentCourse>>> GetStudentCourse()
        {
            return await _context.StudentCourse.ToListAsync();
        }

        // GET: api/StudentCourses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<StudentCourse>>> GetStudentCourse(int id)
        {
            var studentCourse = _context.StudentCourse.Where(a => a.CourseId == id).Include(a => a.Student).ToList();

            if (studentCourse == null)
            {
                return NotFound();
            }

            return studentCourse;
        }

        [HttpGet("{id}/{stid}")]
        public async Task<ActionResult<List<StudentCourse>>> GetStudentCourse(int stid, int id)
        {
            var Course = _context.Courses.Find(id);

            if (Course == null)
            {
                return NotFound();
            }

            else
            {
                StudentCourse sc = new StudentCourse();
                sc.CourseId = id;
                sc.StudentId = stid;
                _context.StudentCourse.Add(sc);
                await _context.SaveChangesAsync();
                return Ok();
            }
        }

        // PUT: api/StudentCourses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentCourse(int id, StudentCourse studentCourse)
        {
            if (id != studentCourse.CourseId)
            {
                return BadRequest();
            }

            _context.Entry(studentCourse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentCourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentCourses
        [HttpPost]
        public async Task<ActionResult<StudentCourse>> PostStudentCourse(StudentCourse studentCourse)
        {
            _context.StudentCourse.Add(studentCourse);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StudentCourseExists(studentCourse.CourseId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudentCourse", new { id = studentCourse.CourseId }, studentCourse);
        }

        // DELETE: api/StudentCourses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentCourse>> DeleteStudentCourse(int id)
        {
            var studentCourse = await _context.StudentCourse.FindAsync(id);
            if (studentCourse == null)
            {
                return NotFound();
            }

            _context.StudentCourse.Remove(studentCourse);
            await _context.SaveChangesAsync();

            return studentCourse;
        }

        private bool StudentCourseExists(int id)
        {
            return _context.StudentCourse.Any(e => e.CourseId == id);
        }
    }
}

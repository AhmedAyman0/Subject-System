using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class StudentCourse
    {
        [ForeignKey("Student")]
        [Column(Order =1)]
        public int StudentId { get; set; }
        [ForeignKey("Courses")]
        [Column(Order = 2)]
        public int CourseId { get; set; }
        public double Grade { get; set; }
        public Courses Courses { get; set; }
        public Student Student { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AngularProject.Models;

namespace Entities.Models
{
   
    [Table("Students")]
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int StudentId { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [StringLength(60, ErrorMessage = "Name can't be longer than 60 characters")]
        public string name { get; set; }

        public int age { get; set; }

        [ForeignKey("Department")]
        public int departmentId { get; set; }


        public Department department { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }

    }
}

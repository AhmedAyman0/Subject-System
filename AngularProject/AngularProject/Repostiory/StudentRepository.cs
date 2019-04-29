using AngularProject.RepostioryBase;
using Entities.Models;
using AngularProject.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;

namespace AngularProject.Repostiory
{
    public class StudentRepository : RepositoryBase<Student>, IStudnetRepository
    {
        public StudentRepository(RepositoryContext context):base(context)
        {

        }
    }
}

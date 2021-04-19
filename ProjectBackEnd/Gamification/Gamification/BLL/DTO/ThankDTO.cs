using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.DAL.Repositories
{
    public class ThankDTO
    {
        public string Text { get; set; }
        public Guid ToUserId { get; set; }
    }
}

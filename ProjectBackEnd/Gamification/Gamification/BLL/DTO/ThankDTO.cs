using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.BLL.DTO
{
    public class ThankDTO
    {
        public Guid FromUserId { get; set; }

        public Guid ToUserId { get; set; }

        public string Text { get; set; }
    }
}

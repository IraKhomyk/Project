using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.Models
{
    public class Role : BaseEntity
    {
        [Required]
        public string RoleName { get; set; }
        public ICollection<User> Users { get; set; }
    }
}

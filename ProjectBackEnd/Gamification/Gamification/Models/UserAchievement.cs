using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.Models
{
    public class UserAchievement:BaseEntity
    {
        [Required]
        public Guid UserId { get; set; }
        [Required]
        public User User { get; set; }
        [Required]
        public Guid AchievementId { get; set; }
        [Required]
        public Achievement Achievement { get; set; }
        [Required]
        public DateTime AddedTime { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.Models
{
    public class UserAchievement
    {
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid AchievementId { get; set; }
        public Achievement Achievement {get;set;}
        public DateTime AddedTime { get; set; }
        public IEnumerable<UserAchievement> UserAchievements { get; set; }

    }
}

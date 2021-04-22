using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.BLL.DTO
{
    public class UserAchievementsDTO
    {
        public ICollection<AchievementDTO> Achievements { get; set; }
    }
}

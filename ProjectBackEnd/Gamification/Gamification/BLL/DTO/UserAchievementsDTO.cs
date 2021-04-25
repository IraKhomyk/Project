using System;

namespace Gamification.BLL.DTO
{
    public class UserAchievementsDTO
    {
        public ICollection<AchievementDTO> Achievements { get; set; }
    }
}

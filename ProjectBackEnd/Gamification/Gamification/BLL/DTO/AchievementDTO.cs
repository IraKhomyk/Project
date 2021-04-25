using System;

namespace Gamification.BLL.DTO
{
    public class AchievementDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Xp { get; set; }
        public int IconId { get; set; }
    }
}

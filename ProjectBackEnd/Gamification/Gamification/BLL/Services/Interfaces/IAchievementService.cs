using Gamification.BLL.DTO;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IAchievementService
    {
        public Task<IEnumerable<AchievementDTO>> GetAllAchievements(CancellationToken cancellationToken);
        public Task<AchievementDTO> GetAchievementById(Guid Id, CancellationToken cancellationToken);
        public Task<Achievement> CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken);
        public Task<Achievement> UpdateAchievement(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken);
        public Task<Achievement> DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken);
        public Task<UserAchievementsDTO> GetAllUserAchievements(CancellationToken cancellationToken);

    }
}

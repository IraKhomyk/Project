using Gamification.BLL.DTO;
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
        public Task CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken);
        public Task UpdateAchievement(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken);
        public Task DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken);
    }
}

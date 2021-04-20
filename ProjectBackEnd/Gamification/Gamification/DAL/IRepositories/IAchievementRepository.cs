using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.IRepository
{
    public interface IAchievementRepository
    {
        public Task<IEnumerable<Achievement>> GetAllAchievements(CancellationToken cancellationToken);
        public Task<Achievement> GetAchievementById(Guid AchievementId, CancellationToken cancellationToken);
        public Task<Achievement> CreateAchievement(Achievement achievement, CancellationToken cancellationToken);
        public Task<Achievement> UpdateAchievement(Guid achievementId, Achievement achievement, CancellationToken cancellationToken);
        public Task<Achievement> DeleteAchievement(Guid AchievementId, CancellationToken cancellationToken);
        public Task<User> GetAllUserAchievements(CancellationToken cancellationToken);
    }
}

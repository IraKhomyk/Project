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
        public Task<Achievement> GetAchievementById(int AchievementId, CancellationToken cancellationToken);
    }
}

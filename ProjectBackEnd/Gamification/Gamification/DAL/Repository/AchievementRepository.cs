using Gamification.DAL.IRepository;
using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repository
{
    public class AchievementRepository
    {
        private MyContext _context;

        public AchievementRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Achievement>> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements = _context.Achievements;

            return await achievements.ToListAsync(cancellationToken);
        }

        public async Task<Achievement> GetAchievementById(int achievementId, CancellationToken cancellationToken)
        {
            return await _context.Achievements.FirstOrDefaultAsync(x => x.Id == achievementId, cancellationToken);
        }
    }
}
